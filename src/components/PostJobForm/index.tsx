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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="job-name">Title</label>
      <input type="text"  {...register("title" as const, { required: "Job Title is required", minLength: 3 })} />
      {errors.title && <span>Title is required</span>}

      <label htmlFor="company-name">Description</label>
      <input type="text" {...register("description" as const, { required: "Company name is required" })} />
      {errors.description && <span>This field is required</span>}

      <label htmlFor="email">Email</label>
      <input type="email" {...register("email" as const, { required: "email is required", validate: validateEmail })} />
      {errors.email && <span>This field is required</span>}

      <label htmlFor="link">Link</label>
      <input type="text" {...register("link" as const, { required: "link is required" })} />
      {errors.link && <span>This field is required</span>}

      <label htmlFor="salary">Salary</label>
      <input type="number" {...register("salary" as const, { required: "Salary is required" })} />
      {errors.salary && <span>Salary is required</span>}

      <div>
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" ref={categoryRef}>
          {Object.values(JobCategory).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
       
    <label htmlFor="company">Company</label>
      <input type="text" {...register("company" as const, { required: "company is required" })} />
      {errors.company && <span>Company is required</span>}

      <label htmlFor="location">Location</label>
      <input type="text" {...register("location" as const, { required: "location is required" })} />
      {errors.location && <span>Location is required</span>}

      
      <button type="submit">Submit</button>
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

