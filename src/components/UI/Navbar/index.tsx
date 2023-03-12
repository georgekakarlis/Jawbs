import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";





export default function Navbar() {
  const { data: session, status } = useSession();
 
  
  /* const loading = status === "loading"; */

  return (
    <>
      <nav className="  sm:max-w-screen w-full mx-auto  flex  justify-between border-b-4  bg-black  md:max-w-screen-xl ">
        <div className=" px-2 md:flex">
          <ul className="m-2 w-full mx-auto p-2 text-center justify-center flex md:flex sm:flex my-auto sm:my-auto md:my-auto sm:justify-center sm:text-center md:justify-center md:text-center">
            <li className="text-xl sm:my-auto md:my-auto my-auto">
              <Link href="/" className="text-center  justify-center my-auto text-gray hover:text-white">Jawbs</Link>
            </li>
            <li className="text-xl sm:my-auto md:my-auto my-auto">
    <Link href="/jobs" className="text-center  justify-center mx-auto ml-4 my-auto text-gray hover:text-white focus:outline-none">Jobs</Link>
     

     </li>

            {/* <li className="">
              {session?.user && (
                <>
                  <Link
                    href={`/dashboard`}
                    className="ml-2 items-center text-xl  text-green-500"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </li> */}
          </ul>
        </div>
        <div className="my-auto m-1 flex sm:p-2 md:p-2">
          {!session && (
            <>
              <a
                href={`/auth/signin`}
                className=" mr-5 ml-2 w-full  rounded-md text-gray px-3 py-2  hover:bg-green-800"
                onClick={(e) => {
                  e.preventDefault();
                  void signIn();
                }}
              >
                Post a Job
              </a>
            </>
          )}
          {session?.user && (
            <>
             {/*  {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=" float-left my-auto mr-4 h-9 w-9 overflow-hidden rounded-sm bg-white bg-cover bg-no-repeat" //avatar
                />
              )} */}
               <Link href={`/dashboard`} className="flex text-center justify-center my-auto mr-4 text-gray hover:text-white">
                  Dashboard
                </Link>
                
                <table className=" inline-flex my-auto">
  <tbody>
                <tr className=" shadow-inner my-auto ">
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=" float-left my-auto  mr-2 h-7 w-7 justify-center text-center overflow-hidden rounded-sm bg-white bg-cover bg-no-repeat" //avatar
                />
              )}
               <p className="flex justify-center text-gray hover:text-white my-auto">
                 {session.user.name ?? session.user.email}
               </p>
               </>
          )}
       </tr>
       </tbody>
       </table>
       
              {/* <span className=""> */}
               
                <br />
                {/* <p className="">
                  {session.user.name ?? session.user.email}
                </p> */}
               
              {/* </span> */}
              <a
                href={`/api/auth/signout`}
                className="  my-auto mr-2 ml-2   rounded-md bg-green-600 px-2 py-1 text-white hover:bg-green-900 " //button
                onClick={(e) => {
                  e.preventDefault();
                 void signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
        
        
      </nav>
      
    </>
  );
}
