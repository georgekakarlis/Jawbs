

import Layout from "../components/Layout"
import FeaturesFirst from "@/components/UI/Features/FeaturesFirst"
import FeaturesSecond from "@/components/UI/Features/FeaturesSecond"

import LandingComponent from "@/components/UI/LandingComponent"


export default function Home() {

 
  return (
    <>
     
      <Layout>
      <div className="mx-auto">
<LandingComponent />
</div>
      <FeaturesFirst />
      <FeaturesSecond />

      </Layout>
    </>
  )
}


