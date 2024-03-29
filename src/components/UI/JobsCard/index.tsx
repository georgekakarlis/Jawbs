import { JobCategory } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Job {
  id: string;
  title: string;
  description: string;
  category: JobCategory;
  location: string;
  salary: number;
  email: string;
  link: string;
  company: string;
}
interface JobsListProps {
  title: string;
  description: string;
  job: Job;
}

const JobsList: React.FC<JobsListProps> = ({ title, description, job }) => {
  //here i declare a state variable name which is used to initialize an empty array so that it can accept the data from the api endpoint
  //The useEffect hook is used to perform a side effect when the component is mounted
  // The fetchJobs function is declared inside the useEffect hook, which uses async/await syntax to fetch data from a server-side API endpoint "/api/getJobs". 
  //The fetched data is then parsed using response.json() and assigned to the jobs state variable using setJobs(jobs). 
  //The empty dependency array [] is passed as the second argument to the useEffect hook, indicating that the effect should only run once when the component is mounted.
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch("/api/getJobs");
      const jobs = await response.json();
      setJobs(jobs);
    }

    fetchJobs();
  }, []);

  return (
    <div className="mx-auto justify-center flex  w-full">
    <div className="grid gap-2 grid-rows-1 sm:grid-rows-1 lg:grid-rows-1  p-5 w-full md:w-1/2 container mx-auto">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-3 py-2 bg-green-500 text-white font-bold uppercase tracking-wide text-xs">
            {job.category}
          </div>
          <div className="py-4 px-6">
            <h2 className="text-lg font-bold leading-6 text-gray-900">
              {job.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{job.location}</p>
          </div>
          <div className="px-6 pb-3">
            <a
              href={`mailto:${job.email}`}
              className="text-green-600 hover:text-blue-500"
            >
              {job.email}
            </a>
            <div className="mt-2 flex justify-between items-center">
              
              <p className="ml-2 text-gray-600">{job.company}</p><Link href={`api/jobs/${job.id}`}>
  <a>Apply for {job.title}</a>

              <button className="  rounded-xl bg-red-500"></button></Link>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default JobsList