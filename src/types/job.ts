import { JobCategory } from "@prisma/client";

export interface Job {
    id: String;
    title: String;
    description: String;
    category: JobCategory;
    location: String;
    salary: String;
    email: String;
    link: String;
  }

export { JobCategory };

