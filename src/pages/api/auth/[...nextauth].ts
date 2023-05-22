import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import TwitterProvider from "next-auth/providers/twitter"
import LinkedInProvider from "next-auth/providers/linkedin"
import { env } from "process"

import prisma from '../../../lib/prisma'



export const authOptions: NextAuthOptions = {
 
  callbacks: {session({ session, user }) {
    if (session.user) {
      if (typeof user.id !== "string") throw new Error("id should a number");
      session.user.id = user.id // OK
      // session.user.id = +user.id // more dangerous but still works
      // session.user.id = user.id as number // also dangerous
    }
    return session },},
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
        clientId: env.DISCORD_CLIENT_ID,
        clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
   ],
   pages: {
    signIn: "/auth/signin",
  },
  
  
  
}

export default NextAuth(authOptions)


