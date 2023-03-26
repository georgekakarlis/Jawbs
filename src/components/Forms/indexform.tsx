import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { JobCategory } from '@prisma/client';
import { useRef } from 'react';


type FormValues = {
    id: string;
    title: string;
    description: string;
    category: JobCategory;
    location: string;
    salary: string;
    email: string;
    link: string;
    company: string;
  };

 /*  useRef hook is used to create a reference to the category select element in the form.
useForm hook is used to handle form state and validation. The register, handleSubmit, and errors variables are destructured from the returned object of useForm<FormValues>().
useRouter hook is used to get access to the Next.js router object.
The onSubmit function is an asynchronous function that will be called when the form is submitted. It uses the axios library to send a POST request to a server-side API endpoint /api/findJobQuery. The request body includes data from the form fields, as well as the selected category from the categoryRef reference.

If the API request is successful, the function logs the response data to the console. Then, the function uses the router object to redirect to the "/api/[id]" page after a 2-second delay using setTimeout.

If the API request fails, the function logs the error to the console.

Overall, this code handles the submission of a form, sends data to a server-side API endpoint, and redirects the user to another page after a delay based on the result of the API request. */

export default function IndexForm()  {
    
    const categoryRef = useRef<HTMLSelectElement>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const router = useRouter();

    const onSubmit = async (data: FormValues) => {
        try {
          const response = await axios.post('http://localhost:3000/api/findJobQuery', {
            ...data,
            salary: toString(),
            category: categoryRef.current?.value as JobCategory, // get selected value from ref
            
        }, {
            headers: { 'Content-Type': 'application/json' },
          });
          const result = response.data;
          console.log(result);
          
            // redirect to dashboard after 2 seconds
            setTimeout(async () => {
             await router.push(`/api/[id]`);
            }, 2000);
        } catch (error) {
          console.error(error);
          
        }
      };

  return (
    
    <><div className=" w-full p-1 flex flex-col md:flex-row justify-center items-center ">

      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-md'>
        <h3 className="text-white md:mr-2 mb-2 md:mb-0 justify-center text-center text-xl">Search Jobs</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row justify-center items-center">

          <div className="mb-4 md:mr-4 md:mb-0 flex flex-col md:flex-row items-center">
            <input
              placeholder='Search Here..'
              type="text"
              name="searchTerm"
              id="searchTerm"
              {...register("searchTerm")}
              className="border-2 border-gray-300 p-2 rounded-md w-full md:w-80" />
          </div>
          <div className="mb-4 md:mr-4 md:mb-0 flex flex-col md:flex-row items-center">
            <label htmlFor="category" className="text-white md:mr-2 mb-2 md:mb-0">Category</label>
            <select
              name="category"
              id="category"
              {...register("category")}
              className="border-2 border-gray-300 p-2 rounded-md"
            >
              <option value="">All Categories</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <div className="mb-4 md:mr-4 md:mb-0 flex flex-col md:flex-row items-center">
            <label htmlFor="location" className="text-white md:mr-2 mb-2 md:mb-0">Location</label>
            <select
              name="location"
              id="location"
              {...register("location")}
              className="border-2 border-gray-300 p-2 rounded-md"
            >
              <option value="">All Locations</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="london">London</option>
              <option value="berlin">Berlin</option>
            </select>
          </div>
          <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md flex-1">Search Jobs</button>
        </form>
      </div>

    </div></>
   
  )
}

