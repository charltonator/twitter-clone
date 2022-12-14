import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from 'next-auth/providers/twitter'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0'
    }),
    // ...add more providers here
  ],
})