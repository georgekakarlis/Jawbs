import Layout from '@/components/Layout'
import JobsCard from '@/components/UI/JobsCard'
import React from 'react'

type Props = {}

const jobsPage = (props: Props) => {
  return (
    <Layout>
      <JobsCard />
      </Layout>
  )
}

export default jobsPage