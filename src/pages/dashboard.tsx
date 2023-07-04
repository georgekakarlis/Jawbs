import { useSession } from "next-auth/react";
import Link from "next/link";

import AccessDenied from "../components/access-denied";
import Layout from "../components/Layout";
import JobsList from "@/components/UI/JobsCard";
import { useState, useEffect } from "react";
import { JobCategory } from "@/types/job";


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

const Dashboard: React.FC<JobsListProps> = ({title,description, job }) => {
 

  const { data: session } = useSession();

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  // If session exists, display content
  return (
    <Layout>
      <div className="h-screen mx-auto p-4">
        <h1 className="text-center pt-1 mb-4">Dashboard</h1>

        <div className="border rounded-md mb-4">
          <ul className="px-4 flex justify-evenly py-2">
            <li className="py-1">
              <Link
                href="/analytics"
                className="text-blue-500 hover:text-blue-600"
              >
                Analytics
              </Link>
            </li>
            <li className="py-1">
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                Random
              </Link>
            </li>
          </ul>
        </div>

        <div className=" border w-1/2 p-4 mx-auto my-auto flex justify-end">
          <h5 className="flex justify-center text-center m-5">
            My posted Jobs
          </h5>
          <div className="grid justify-center my-auto mx-auto w-1/8 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
         
          <JobsList
            key={job.id}
            title={job.title}
            description={job.description}
            job={job}
          />
            
          </div>
        </div>

        <button className="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700">
          <Link href="/create-job">Create a job</Link>
        </button>

        <div className="border w-1/2 p-4 mx-auto my-4">
          <h2 className="text-lg font-medium mb-2">Recent Activity</h2>
          <ul>
            <li>
              <span className="text-gray-600">User1</span> created a new job
              post
            </li>
            <li>
              <span className="text-gray-600">User2</span> updated their profile
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard