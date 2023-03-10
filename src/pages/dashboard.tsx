import { useSession } from "next-auth/react";
import Link from "next/link";

import AccessDenied from "../components/access-denied";
import Layout from "../components/Layout";


export default function Dashboard() {
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
      <h1 className="text-center pt-1">Dashboard</h1>
      
      
       
      
      <button><Link href="/create-job">Create a job</Link></button>
      
    </Layout>
  );
}
