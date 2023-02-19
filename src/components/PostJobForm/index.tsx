import { useForm } from 'react-hook-form';
import { PrismaClient } from '@prisma/client';

const validateEmail = (value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(value) || "Invalid email address";
};

type FormValues = {
  JobName: string;
  CompanyName: string;
  email: string;
  mobileNumber: number;
  devYes: string;
  devNo: string; 
  JobTitle: string;
};

export default function JobForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('http://localhost:3000/api/postJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
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

      <label htmlFor="dev-yes">Development Experience (Yes)</label>
      <input type="radio" value="Yes" {...register("devYes" as const)} />
      {errors.devYes && <span>This field is required</span>}

      <label htmlFor="dev-no">Development Experience (No)</label>
      <input type="radio" value="No" {...register("devNo" as const)} />
      {errors.devNo && <span>This field is required</span>}

      <label htmlFor="job-title">Job Title</label>
      <input type="text" {...register("JobTitle" as const, { required: "JobTitle is required" })} />
      {errors.JobTitle && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

/* import { Prisma } from "@prisma/client";
import { useState } from "react"
import { useForm } from 'react-hook-form';


const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

export default function PostJobForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [JobName, setJobName] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [developer, setDeveloper] = useState("");

  const onSubmit = async (data:any ) => {
    const jobData = {
      JobName: data.JobName,
      CompanyName: data.CompanyName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      JobTitle: data.JobTitle,
      Yes: data.developer === "Yes",
      No: data.developer === "No",
    };
    const response = await fetch("/api/postJob", {
      method: "POST",
      body: JSON.stringify(jobData),
    });
    const result = await response.json();
    alert(result.message);
  };
    return (
      <div className="mx-auto flex justify-center">
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="JobName">Job Name</label>
        <input
          id="JobName"
          type="text"
          value={JobName}
          
          {...register('JobName', { required: true, maxLength: 80 }) }
          
        />
        {errors.JobName && (
          <FormError errorMessage="Job Name is required" />
        )}
      </div>
      <div>
        <label htmlFor="CompanyName">Company name</label>
        <input
          id="CompanyName"
          type="text"
          value={CompanyName}
          {...register('CompanyName', { required: true, maxLength: 100 })}
        />
        {errors.CompanyName && (
          <FormError errorMessage="Company Name is required" />
        )}
      </div>
      <div>
        <label htmlFor="email">Contact Email</label>
        <input
          id="email"
          type="text"
          value={email}
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              
          })}
        />
        {errors.email && (
          <FormError errorMessage="Email is required" />
        )}
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile number</label>
        <input
          id="mobileNumber"
          type="tel"
          value={mobileNumber}
          {...register('mobileNumber', {
            maxLength: 15,
            minLength: 10,
          })}
        />
      </div>
      <div>
        <label htmlFor="title">Job Title</label>
        
        <input
          id="JobTitle"
          type="text"
          value={JobTitle}
          {...register('JobTitle', {
            maxLength: 60,
            minLength: 10,
          })}
        />
      </div>

      <div>
        <fieldset>
          <legend>Are you a developer?</legend>

          <div>
            <input
              id="devYes"
              type="radio"
              value="Yes"
              {...register('developer', { required: true })}
            />
            <label htmlFor="devYes">Yes</label>
          </div>

          <div>
            <input
              id="devNo"
              type="radio"
              value="No"
              {...register('developer', { required: true })}
            />
            <label htmlFor="devNo">No</label>
          </div>
        </fieldset>
      </div>

      <input type="submit" />
    </form>
       
      </div>
    )
  }
   */