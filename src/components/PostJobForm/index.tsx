import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validateEmail = (value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(value) || "Invalid email address";
};

type FormValues = {
  JobName: string;
  CompanyName: string;
  email: string;
  mobileNumber: number;
  /* devYes: string;
  devNo: string;  */
  JobTitle: string;
};

export default function JobForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('http://localhost:3000/api/postJob', {
        ...data,
      mobileNumber: data.mobileNumber.toString(), 
    }, {
        headers: { 'Content-Type': 'application/json' },
      });
      const result = response.data;
      console.log(result);
      toast.success('Job posted successfully!');
        // redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
    } catch (error) {
      console.error(error);
      toast.error('Error posting job. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="job-name">Job Name</label>
      <input type="text"  {...register("JobName" as const, { required: "Job name is required", minLength: 3 })} />
      {errors.JobName && <span>This field is required</span>}

      <label htmlFor="company-name">Company Name</label>
      <input type="text" {...register("CompanyName" as const, { required: "Company name is required" })} />
      {errors.CompanyName && <span>This field is required</span>}

      <label htmlFor="email">Email</label>
      <input type="email" {...register("email" as const, { required: "email is required", validate: validateEmail })} />
      {errors.email && <span>This field is required</span>}

      <label htmlFor="mobile-number">Mobile Number</label>
      <input type="number" {...register("mobileNumber" as const, { required: "Tel number is required" })} />
      {errors.mobileNumber && <span>This field is required</span>}

      {/* <label htmlFor="dev-yes">Development Experience (Yes)</label>
      <input type="radio" value="Yes" {...register("devYes" as const)} />
      {errors.devYes && <span>This field is required</span>}

      <label htmlFor="dev-no">Development Experience (No)</label>
      <input type="radio" value="No" {...register("devNo" as const)} />
      {errors.devNo && <span>This field is required</span>} */}

      <label htmlFor="job-title">Job Title</label>
      <input type="text" {...register("JobTitle" as const, { required: "JobTitle is required" })} />
      {errors.JobTitle && <span>This field is required</span>}

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

