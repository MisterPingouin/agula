import fs from "fs";
import path from "path";
import vm from "node:vm";

const ALLOWED_LOCALES = new Set(["fr", "en"]);

function getLocaleFilePath(locale) {
  if (!ALLOWED_LOCALES.has(locale)) {
    throw new Error(`Locale non autorisée: ${locale}`);
  }
  return path.join(process.cwd(), "src", "app", "locales", `${locale}.js`);
}

function extractJsObjectFromJsModule(fileContent) {
  // 1) cas "const fr = {...}; export default fr;"
  // 2) cas "export default {...}"
  const candidates = [];

  const constMatch = fileContent.match(/const\s+(fr|en)\s*=/);
  if (constMatch?.index != null) candidates.push(constMatch.index);

  const exportMatch = fileContent.match(/export\s+default/);
  if (exportMatch?.index != null) candidates.push(exportMatch.index);

  if (candidates.length === 0) {
    throw new Error("Format de locale non reconnu (pas de const fr/en ni export default).");
  }

  const startFrom = Math.min(...candidates);
  const braceStart = fileContent.indexOf("{", startFrom);
  if (braceStart === -1) {
    throw new Error("Impossible de trouver le début d'objet '{' dans le fichier locale.");
  }

  // Extraction avec gestion des strings/échappements pour matcher la bonne "}"
  let i = braceStart;
  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escaped = false;

  for (; i < fileContent.length; i++) {
    const ch = fileContent[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === stringQuote) {
        inString = false;
        stringQuote = "";
      }
      continue;
    }

    if (ch === "'" || ch === '"') {
      inString = true;
      stringQuote = ch;
      continue;
    }

    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) {
        const objStr = fileContent.slice(braceStart, i + 1);
        return objStr;
      }
    }
  }

  throw new Error("Objet non terminé (accolades non équilibrées).");
}

function evalObjectLiteralSafely(objectLiteralStr, locale) {
  // On évalue UNIQUEMENT un literal d'objet dans un sandbox
  // Pas de process, pas de require, pas de global Node
  const context = vm.createContext(Object.create(null));

  // Parenthèses obligatoires pour évaluer un objet literal
  const wrapped = `"use strict";\n(${objectLiteralStr})`;

  try {
    const script = new vm.Script(wrapped, { filename: `${locale}.js` });
    const value = script.runInContext(context, { timeout: 50 });

    // Normalise en JSON-serializable (au cas où)
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    throw new Error(
      `Impossible d'évaluer l'objet dans ${locale}.js (vm). Détail: ${e?.message || e}`
    );
  }
}

export function readLocaleData(locale) {
  const filePath = getLocaleFilePath(locale);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Fichier locale introuvable: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const objectLiteralStr = extractJsObjectFromJsModule(content);

  // ✅ Ici on n'utilise PLUS JSON.parse sur une string non-JSON
  return evalObjectLiteralSafely(objectLiteralStr, locale);
}

export function writeLocaleData(locale, data) {
  const filePath = getLocaleFilePath(locale);

  const varName = locale; // "fr" ou "en"
  const updated = `const ${varName} = ${JSON.stringify(data, null, 2)};

export default ${varName};
`;

  // Écriture atomique
  const tmp = `${filePath}.tmp`;
  fs.writeFileSync(tmp, updated, "utf-8");
  fs.renameSync(tmp, filePath);
}
