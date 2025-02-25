import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Nom d’utilisateur', type: 'text' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        // Remplace ces valeurs par celles de ton compte admin
        const adminUsername = 'Ozil2a';
        const adminPassword = 'Carbunara2@';

        if (
          credentials.username === adminUsername &&
          credentials.password === adminPassword
        ) {
          return { id: 1, name: 'Admin' }; // Renvoie un objet utilisateur si les identifiants sont corrects
        }

        return null; // Retourne null si l'authentification échoue
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
