import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function getJobs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const jobs = await prisma.job.findMany();
    res.status(200).json(jobs);
  } else {
    res.status(405).end();
  }
}
