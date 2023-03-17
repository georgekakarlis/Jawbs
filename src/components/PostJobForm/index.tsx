import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { JobCategory } from '@prisma/client';
import { useRef } from 'react';
import { useSession } from 'next-auth/react';



const validateEmail = (value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(value) || "Invalid email address";
};

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
  companyImage: string
};


export default function JobForm() {
  

  const categoryRef = useRef<HTMLSelectElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const router = useRouter();
  

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('http://localhost:3000/api/postJob', {
        ...data,
        salary: toString(),
        category: categoryRef.current?.value as JobCategory, // get selected value from ref
        
    }, {
        headers: { 'Content-Type': 'application/json' },
      });
      const result = response.data;
      console.log(result);
      toast.success('Job posted successfully!');
        // redirect to dashboard after 2 seconds
        setTimeout(async () => {
         await router.push('/dashboard');
        }, 2000);
    } catch (error) {
      console.error(error);
      toast.error('Error posting job. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-1/2 mx-auto p-6  bg-gray-900 rounded-sm shadow-md">


  <div className="mb-3">
    <label htmlFor="job-name" className="block mb-2 font-bold text-gray-400">Title</label>
    <input
    placeholder='Company Title'
      type="text"
      {...register("title" as const, { required: "Job Title is required", minLength: 3 })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
  </div>

  <div className="mb-3">
    <label htmlFor="company-name" className="block mb-2 font-bold text-gray-400">Description</label>
    <input
    placeholder='Job Description'
      type="text"
      {...register("description" as const, { required: "Description is required" })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="block mb-2 font-bold text-gray-400">Email</label>
    <input
    placeholder='email@johndoe.com'
      type="email"
      {...register("email" as const, { required: "Email is required", validate: validateEmail })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
  </div>

  <div className="mb-3">
    <label htmlFor="link" className="block mb-2 font-bold text-gray-400">Link</label>
    <input
    placeholder='Link for your job'
      type="text"
      {...register("link" as const, { required: "Link is required" })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.link && <span className="text-red-500 text-sm">{errors.link.message}</span>}
  </div>

  <div className="mb-3">
    <label htmlFor="salary" className="block mb-2 font-bold text-gray-400">Salary</label>
    <input
    placeholder='eg. 50.000'
      type="number"
      {...register("salary" as const, { required: "Salary is required" })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.salary && <span className="text-red-500 text-sm">{errors.salary.message}</span>}
  </div>

  <div className="mb-3">
    <label htmlFor="category" className="block mb-2 font-bold text-gray-400">Category:</label>
    <select 
    placeholder='Category'
    name="category" id="category" ref={categoryRef} className="w-full p-2 border border-gray-400 rounded-md">
      {Object.values(JobCategory).map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>

   <div className="mb-3">
    <label htmlFor="company" className="block mb-2 font-bold text-gray-400">Company</label>
    <input
    placeholder='Full Name of Company'
      type="text"
      {...register("company" as const, { required: "Company is required" })}
      className="w-full p-2 border border-gray-400 rounded-md"
    />
    {errors.company && <span className="text-red-500 text-sm">{errors.company.message}</span>}
   </div>
   <div className='mb-3'>
      <label htmlFor="location" className="block mb-2 font-bold text-gray-400">Location</label>
      <input
      placeholder='Location'
       type="text" {...register("location" as const, { required: "location is required" })} 
      className="w-full p-2 border border-gray-400 rounded-md"
      />
      {errors.location && <span>Location is required</span>}
    </div>
    <div className='mb-3'>
    <label htmlFor="company-image" className="block mb-2 font-bold text-gray-400">Company Logo</label>
    <input type="file" id="company-image" 
    {...register("companyImage" as const, /* { required: "Company Image is required" } */)}
     className=" cursor-pointer mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
     />
   {errors.companyImage && <span>Logo is required</span>}
    </div>
      <div className='mb-3 mx-auto flex'>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
      Submit
     </button>
      </div>
      <ToastContainer 
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
/>
    </form>
  );
}

