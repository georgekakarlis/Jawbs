import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { env } from "process"

import prisma from '../../../lib/prisma'



export const authOptions: NextAuthOptions = {
 
  callbacks: {},
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
        clientId: env.DISCORD_CLIENT_ID,
        clientSecret: env.DISCORD_CLIENT_SECRET,
    })
   ],
   pages: {
    signIn: "/auth/signin",
  },
  
  
}

export default NextAuth(authOptions)


