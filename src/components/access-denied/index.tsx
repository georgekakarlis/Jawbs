/* eslint-disable @next/next/no-html-link-for-pages */
import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        
        <a
          href="/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            void signIn();
          }}
        >
          You must be signed in to view this page
        </a>
      </p>
    </>
  );
}
