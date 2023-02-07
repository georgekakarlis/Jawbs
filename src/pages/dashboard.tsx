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
      <div className="content-center flex mx-auto">
      <th className="p-4   border  table-cell  shadow-inner  ">
      {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=" float-left my-auto  mr-4 h-7 w-7 justify-center text-center overflow-hidden rounded-sm bg-white bg-cover bg-no-repeat" //avatar
                />
              )}
               <p className="flex justify-center my-auto">
                 Hey {session.user.name ?? session.user.email}
               </p>
               </>
          )}
      </th>
      </div>
      <h1>Dashboard</h1>
      <button><Link href="/create-job">Create a job</Link></button>
      <p></p>
    </Layout>
  );
}
