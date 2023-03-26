import { NextApiRequest, NextApiResponse } from 'next';
import { JobCategory, Prisma, PrismaClient } from '@prisma/client';
import { getServerSession, User } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';


/* NextApiRequest and NextApiResponse from the next module to handle the request and response objects.
JobCategory and PrismaClient from the @prisma/client module to interact with a Prisma ORM database.
getServerSession and User from the next-auth module to get the user session and authentication options.
authOptions from the ./auth/[...nextauth] module, which contains the configuration options for the NextAuth.js authentication provider.
The config object sets options for the API, including the request body size limit and payload parsing options.

The Job interface defines the shape of a job object, which includes an ID, title, description, category, location, salary, email, and link.

The function checks if the user is authenticated and authorized to create a job, and returns a 401 Unauthorized response if not.

If the request method is not POST, the function returns a 405 Method Not Allowed response.

If the request is valid, the function retrieves the job data from the request body and creates a new job in the database using the Prisma job.create method.

If the job creation is successful, the function returns a 200 OK response with the created job object.

If the job creation fails, the function returns a 500 Internal Server Error response with an error message. */


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
