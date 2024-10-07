"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigati
import axios from "axios";

function Page() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const router = useRouter();
  
  let ele ;
  const handleInput = (e) => {
    ele = e.target;
    setData({
      ...data,
      [ele.name]: ele.value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`, data)
      .then(async function (response) {
        console.log(response);
        if(response.status === 201){
          setData({
              name: "",
              email: "",
              password: "",
            })
          console.log(response.data.token);
          localStorage.setItem('jwtToken',response.data.token);
          router.push("/profile");
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
return (
<div className="w-screen my-20 flex items-center justify-center">
    <div className="bg-neutral-950 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
    <h2 className="font-bold text-3xl text-neutral-400">
        Welcome to <span className="text-white">coding<span className="text-[#FF4D00]">आश्रम</span></span>
    </h2>
    <p className="text-md font-semibold max-w-sm mt-2 text-[#ff4d00]">
        signUp as a user
    </p>
    <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
        star(*) marked fields are mandatory to fill
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="name">Name*</Label>
        <Input name="name" onChange={handleInput} value={data.name} id="name" placeholder="name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email id*</Label>
        <Input name="email" onChange={handleInput} value={data.email} id="email" placeholder="example@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password*</Label>
        <Input name="password" onChange={handleInput} value={data.password} id="password" placeholder="••• •••" type="password" />
        </LabelInputContainer>       
          <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          >
          Register &rarr;
          <BottomGradient />
          </button>
    </form>
    </div>
</div>
)
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent" />
    </>
  );
};
const LabelInputContainer = ({children,className})=>{
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page
