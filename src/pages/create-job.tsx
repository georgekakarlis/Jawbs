import AccessDenied from '@/components/access-denied'
import Layout from '@/components/Layout'
import PostJobForm from '@/components/PostJobForm'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

const createJobPage = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <div className='mx-auto my-auto flex flex-col min-h-screen'>
        <PostJobForm />
      </div>
    </Layout>
  )
}

export default createJobPage