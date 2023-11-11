import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {

  
  providers: [
    CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID,
        clientSecret:  process.env.COGNITO_CLIENT_SECRET,
        issuer:   process.env.COGNITO_DOMAIN
      })
   
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
        token.number=profile.phone_number
      }
      
      return token
    },
    async session({ session, token }) {
        session.accessToken = token.accessToken
        return session
    }
  }


}

export default NextAuth(authOptions)