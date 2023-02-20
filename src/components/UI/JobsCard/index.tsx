import { useEffect, useState } from "react";


interface Job {
  id: number;
  JobName: string;
  CompanyName: string;
  email: string;
  mobileNumber: string;
  JobTitle: string;
}

export default function JobsList() {
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
    <div className="grid gap-2 grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 w-1/2 p-5 container mx-auto">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-3 py-2 bg-green-500 text-white font-bold uppercase tracking-wide text-xs">
            {job.JobTitle}
          </div>
          <div className="py-4 px-6">
            <h2 className="text-lg font-bold leading-6 text-gray-900">
              {job.JobName}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{job.CompanyName}</p>
          </div>
          <div className="px-6 pb-3">
            <a
              href={`mailto:${job.email}`}
              className="text-green-600 hover:text-blue-500"
            >
              {job.email}
            </a>
            <div className="mt-2 flex justify-between items-center">
              
              <p className="ml-2 text-gray-600">{job.mobileNumber}</p>
              <button className="  rounded-xl bg-red-500">Apply</button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
