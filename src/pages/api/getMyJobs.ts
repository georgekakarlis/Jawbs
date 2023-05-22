import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';
import { getServerSession, User } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

const prisma = new PrismaClient();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jobId = req.query.id as string;
  const session = req.query.session as string
  

  if (req.method === 'GET') {
    try {
      const job = await prisma.job.findUnique({
        where: { 
            id: jobId,
            session : getServerSession,
        },
      });

      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }

      return res.status(200).json(job);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch job' });
    }
  }
}