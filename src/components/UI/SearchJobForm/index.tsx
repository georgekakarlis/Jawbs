import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { JobCategory } from '@prisma/client';
import { useRef } from 'react';
import Image from 'next/image';
import MainPageSVG from '../SVGIcons/MainPageSVG';

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

export default function SearchJobForm ()  {
    
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
    <section className="h-screen w-full p-4 flex z-10 flex-col md:flex-row justify-center items-center ">
      <div className='h-screen block  my-auto mx-auto  w-screen'>
      <MainPageSVG />
      </div>
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
            className="border-2 border-gray-300 p-2 rounded-md w-full md:w-80"
          />
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
     
    </section>
  )
}

