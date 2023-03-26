import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

/*  When the route receives a GET request, it uses the Prisma ORM's findMany() method to retrieve all job records from the database and returns them as a JSON response with a 200 status code. //
If the route receives any other HTTP method, it responds with a 405 status code, indicating that the method is not allowed. */

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
