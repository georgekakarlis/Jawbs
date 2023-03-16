import IndexForm from "@/components/Forms/indexform";




export default function LandingComponent()  {

  return (
    <>

<section className="text-gray-400 h-screen flex w-screen mx-auto my-auto justify-center content-center left-0  bg-gray-900 ">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center pt-10">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white p-4 ">Hey, ready for your new Job?</h1>
      <p className=" leading-relaxed">We are here to provide you with the best job-ads tailored to you. Without boring signups and processes.</p>
      <div className="m-10">
      <IndexForm />
     


      </div>
    </div>
  </div>
  
</section>
<svg xmlns="http://www.w3.org/2000/svg" className="top-0 my-auto -mt-20" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>   </>


   
  )
  }

