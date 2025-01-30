import React from "react";

const NavLinks = () => {
  const links = [
    { name: "Nos circuits", href: "#circuits" },
    { name: "Notre bateau", href: "#bateau" },
    { name: "Notre équipe", href: "#equipe" },
    { name: "Nos engagements", href: "#engagements" },
    { name: "Privatisation", href: "#privatisation" },
  ];

  return (
    <nav>
      <ul className="flex flex-col space-y-4 p-3 mt-10 pt-6">
        {links.map((link) => (
          <li key={link.name} className="border-b border-bordergray pb-4">
            <a
              href={link.href}
              className="text-20px font-medium text-black font-content"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
