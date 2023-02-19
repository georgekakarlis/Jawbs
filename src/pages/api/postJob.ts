import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, type Prisma } from '@prisma/client';

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

const prisma = new PrismaClient();


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { JobName, CompanyName, email, mobileNumber,  JobTitle }: Prisma.JobCreateInput = req.body;
    const job = await prisma.job.create({
      data: {
        JobName: JobName,
        CompanyName: CompanyName,
        email: email,
        mobileNumber: mobileNumber.toString(),
        
        JobTitle: JobTitle,
      },
    });
    res.status(200).json(job);
  } else {
    res.status(405).end();
  }
}