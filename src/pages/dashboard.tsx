import { useSession } from "next-auth/react";
import Link from "next/link";

import AccessDenied from "../components/access-denied";
import Layout from "../components/Layout";
import DraftsCard from "@/components/Drafts/draftsCard";


export default function Dashboard() {
  //jobs must come with an HTTP call to api endpoint --TODO 
  const draftJobs = [
    {
      id: 1,
      title: 'Job Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Job Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    
  ];

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
    <div className="h-screen mx-auto  p-4">
      <h1 className="text-center pt-1">Dashboard</h1>
        <div>
          <ol>
            <li><Link href="/analytics">Analytics</Link></li>
            
            <li>Random</li>
          </ol>
        </div>
        {/* do better  */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {draftJobs.map(job => (
          <DraftsCard key={job.id} title={job.title} description={job.description} />
        ))}
      </div>
      <div className="border w-1/4 text-center rounded">
        <button className="mx-auto my-auto m-auto"><Link href="/create-job">Create a job</Link></button>
      </div>
      
    </div>
  </Layout>
  );
}
