
import { getProviders, signIn, getSession } from "next-auth/react";
import type { AppProps } from "next/app";

function signin({ providers }: { providers: AppProps }) {
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
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
