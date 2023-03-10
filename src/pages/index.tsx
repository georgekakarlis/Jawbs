

import Layout from "../components/Layout"
import FeaturesFirst from "@/components/UI/Features/FeaturesFirst"
import FeaturesSecond from "@/components/UI/Features/FeaturesSecond"
import SearchJobForm from "@/components/UI/SearchJobForm"







export default function Home() {

 
  return (
    <>
     
      <Layout>
      <div className="max-w-lg mx-auto mt-8">
<SearchJobForm />
</div>
      <FeaturesFirst />
      <FeaturesSecond />

      </Layout>
    </>
  )
}


