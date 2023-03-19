import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();


export async function drafts(req: NextApiRequest, res: NextApiResponse) {
    const jobId = req.query.id as string;
    
    //first /get drafted jobs via id 
    if (req.method === 'GET') {
        try {
          const job = await prisma.job.findUnique({
            where: { id: jobId },
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
         
      //then we got api endpoint for update the drafted jobs
      if (req.method === 'PUT') {
        const {
          title,
          description,
          category,
          location,
          salary,
          email,
          link,
          company,
        }: Prisma.JobUpdateInput = req.body;
    
        try {
          const updatedJob = await prisma.job.update({
            where: { id: jobId },
            data: {
              title,
              description,
              category,
              location,
              salary,
              email,
              link,
              company,
            },
          });
    
          return res.status(200).json(updatedJob);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Failed to update job' });
        }
      }
}