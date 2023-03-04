
import Footer from "@/components/UI/Footer";
import { getProviders, signIn, getSession } from "next-auth/react";
import type { AppProps } from "next/app";
import Image from "next/image";


function signin({ providers }: { providers: AppProps }) {
  return (
   
    <>
    <div className=" h-screen flex bg-black text-white">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {/* logo edw */}
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

          </div>
          <div className="my-4  mx-5">
            {Object.values(providers).map((provider) => {
              return (
                <div key={provider.name} className="justify-between m-4">

                  {/* <button onClick={() => signIn("discord")} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm  text-sm font-medium ">
                  
                  <span>Sign in with {provider.name}</span>
                  
                </button> */}
                  <button onClick={() => signIn("discord")} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm  text-sm font-medium ">
                    <Image alt="" width={20} height={20} className="flex" src={`https://authjs.dev/img/providers/${provider.id}.svg`} />
                    <span className="ml-2">Sign in with {provider.name}</span>

                  </button>
                </div>
              );
            })}
          </div>



        </div>
      </div>
      <div className="hidden lg:block relative w-0  flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-fill "
          src="/images/signup.webp" fill sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          alt="" />
      </div>

    </div>
    <Footer />
    </>
      
  );
}

export default signin;

export async function getServerSideProps(context: { req: any }) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/dashboard" },
      
    };
  }

  return {
    props: {
      providers: await getProviders(),
    },
  };
}
