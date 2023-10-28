import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
console.log(process.env.GOOGLE_CLIENT_ID, 'process.env.GOOGLE_CLIENT_ID')
export const authOptions = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_SECRET_ID,
   allowDangerousEmailAccountLinking: true,
  }),
 ],
 secret: process.env.NEXTAUTH_SECRET,
 session: {
  strategy: 'jwt',
 },
};
export default NextAuth(authOptions);