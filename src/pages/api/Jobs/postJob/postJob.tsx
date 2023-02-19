import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, type Prisma } from '@prisma/client';



const prisma = new PrismaClient();


export default async function handleJobs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { JobName, CompanyName, email, mobileNumber, devYes, devNO, JobTitle }: Prisma.JobCreateInput = req.body;
    const job = await prisma.job.create({
      data: {
        JobName: JobName,
        CompanyName: CompanyName,
        email: email,
        mobileNumber: mobileNumber,
        devYes: devYes,
        devNO: devNO,
        JobTitle: JobTitle,
      },
    });
    res.status(200).json(job);
  } else {
    res.status(405).end();
  }
}