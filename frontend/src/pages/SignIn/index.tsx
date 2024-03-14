import { useState } from "react";
import { supabase } from "../../config/db.config";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Logo from "../../assets/Logo-V2.svg";

type SignInData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signInError, setSignInError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignIn: Promise<SubmitHandler<FieldValues>> = async ({ email, password }: SignInData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error signing in:", error.message);
        setSignInError("Sign-in failed. Please check your credentials.");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setSignInError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col items-center justify-center h-screen bg-primary-1">
    <img src={Logo} alt="Logo" className="size-[200px] sm:size-[300px] mb-10" />
      <div className="mb-4 relative">
        <EnvelopeIcon className="absolute left-2 top-2 w-6 h-6 text-primary-3 drop-shadow-sm" />
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
        <button type="submit" className="w-[346px] h-11 bg-primary-2 text-primary-3 shadow-md px-4 py-2 rounded-md">
          Sign In
        </button>
      </div>
      <div className="mb-4">
        <button 
            className="w-[346px] h-11 bg-primary-1 text-primary-4 px-4 py-2 rounded-md"
            onClick={() => navigate("/sign-up")}>
          Sign Up
        </button>
      </div>
      {signInError && <div>{signInError}</div>}
    </form>
  );
};

export default SignInForm;