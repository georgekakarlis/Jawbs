import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jobId = req.query.id as string;

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

  if (req.method === 'DELETE') {
    try {
      const deletedJob = await prisma.job.delete({
        where: { id: jobId },
      });

      return res.status(200).json(deletedJob);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete job' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
