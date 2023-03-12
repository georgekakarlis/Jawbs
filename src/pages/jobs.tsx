import Layout from '@/components/Layout'
import JobsCard from '@/components/UI/JobsCard'
import React from 'react'

type Props = {}

const jobsPage = (props: Props) => {
  return (
    <Layout>
      <div className='h-screen'>
      <JobsCard />
      </div>
      </Layout>
  )
}

export default jobsPage