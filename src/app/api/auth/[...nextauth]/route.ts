import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { UserPool } from '@/db/schema/userSchema';

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/log-in',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await UserPool.findOne({ email: credentials?.email });
        const correctPassword = await compare(
          credentials?.password || '',
          user.password
        );

        if (correctPassword) {
          return {
            id: user._id,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
