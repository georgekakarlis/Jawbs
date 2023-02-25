import { NextApiRequest, NextApiResponse } from 'next';
import { JobCategory, Prisma, PrismaClient } from '@prisma/client';
import { getServerSession, User } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
      // Parse JSON payloads
      json: {
        strict: true,
        limit: '1mb',
      },
      // Parse URL-encoded payloads
      urlencoded: {
        extended: true,
        limit: '1mb',
      },
    },
  },
};

export interface Job {
  id: string;
  title: string;
  description: string;
  category: JobCategory;
  location: string;
  salary: string;
  email: string;
  link: string;
}

const prisma = new PrismaClient();

export default async function postJob(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method != 'POST') {
    
    return res.status(405).end();
    
  }

 

  try {
    const {
      title,
      description,
      category,
      location,
      salary,
      email,
      link,
      company,
      
    }: Prisma.JobCreateInput = req.body;


    const job = await prisma.job.create({
      data: {
        title,
        description,
        category,
        location,
        salary,
        email,
        link,
        company,
        
      }
    });

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create job' });
  }
}
