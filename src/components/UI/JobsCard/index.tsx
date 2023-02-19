import { useEffect, useState } from "react";
import axios from "axios";

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
    axios.get("/api/getJobs").then((response) => setJobs(response.data));
  }, []);

  return (
    <div className="mx-auto justify-center p-2 flex flex-wrap w-full">
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-3 py-2 bg-blue-500 text-white font-bold uppercase tracking-wide text-xs">
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
              className="text-blue-600 hover:text-blue-500"
            >
              {job.email}
            </a>
            <div className="mt-2 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="ml-2 text-gray-600">{job.mobileNumber}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
