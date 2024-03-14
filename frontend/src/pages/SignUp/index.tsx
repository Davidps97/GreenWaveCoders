import { useState } from "react";
import { supabase } from "../../config/db.config";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Logo from "../../assets/Logo-V2.svg";

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp: Promise<SubmitHandler<FieldValues>> = async ({ name, email, password }: SignUpData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      // Update user information after sign-up
      if (!error && data) {
        await supabase.auth.updateUser({
          data: { name },
        });
      }

      if (error) {
        setSignUpError("Sign-up failed. Please try again.");
      } else {
        console.log("Sign-up successful:", data);
        navigate("/home");
      }
    } catch (error) {
      setSignUpError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col items-center justify-center h-screen bg-primary-1">
       
       <img src={Logo} alt="Logo" className="size-[200px] sm:size-[300px] mb-10" />

      <div className="mb-4 relative">
        <UserIcon className="absolute left-2 top-2 w-6 h-6 text-primary-3 drop-shadow-sm" />
        <label htmlFor="name" className="sr-only">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", { required: true })}
          className="w-[346px] h-11 bg-primary-4 shadow-md rounded-lg font-montserrat text-m-16 p-2 pl-10 border-b-2 border-primary-3 outline-none"
        />
        {errors.name && <span className="font-karla text-sm text-primary-4 mt-1 block">This field is required</span>}
      </div>

      <div className="mb-10"></div>

      <div className="mb-4 relative">
        <EnvelopeIcon className="absolute left-2 top-2 w-6 h-6 text-primary-3 drop-shadow-sm" />
        <label htmlFor="email" className="sr-only">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-[346px] h-11 bg-primary-4 shadow-md rounded-lg font-montserrat text-m-16 p-2 pl-10 border-b-2 border-primary-3 outline-none"
        />
        {errors.email && <span className="font-karla text-sm text-primary-4 mt-1 block">This field is required</span>}
      </div>

      <div className="mb-10"></div>

      <div className="mb-4 relative">
        <LockClosedIcon className="absolute left-2 top-2 w-6 h-6 text-primary-3" />
        <label htmlFor="password" className="sr-only">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-[346px] h-11 bg-primary-4 shadow-md rounded-lg font-montserrat text-m-16 p-2 pl-10 border-b-2 border-primary-3 outline-none"
        />
        {errors.password && <span className="font-karla text-sm text-primary-4 mt-1 block">This field is required</span>}
      </div>

      <div className="mb-32"></div>

      <div className="mb-4">
        <button type="submit" className="w-[346px] h-11 bg-primary-2 text-primary-3 px-4 py-2 shadow-md rounded-md">
          Sign Up
        </button>
      </div>

      <div className="mb-4">
        <button 
          className="w-[346px] h-11 bg-primary-1 text-primary-4 px-4 py-2 rounded-md"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </button>
      </div>

      {signUpError && <div>{signUpError}</div>}
    </form>
  );
};

export default SignUpForm;
