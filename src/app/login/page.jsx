"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Loader from "@/components/Loader";
import axios from 'axios';

function Page() {
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`, formData);
      if (response.status === 201) {
        setFormData({ email: '', password: '' });
        localStorage.setItem('jwtToken', response.data.token);
        setLoad(false);
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="bg-neutral-950 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
        <h2 className="font-bold text-3xl text-neutral-400">
          Welcome to <span className="text-white">coding<span className="text-[#FF4D00]">आश्रम</span></span>
        </h2>
        <p className="text-md font-semibold max-w-sm mt-2 text-[#ff4d00]">login as a user</p>
        <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">star(*) marked fields are mandatory to fill</p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">Email id*</label>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              id="email"
              placeholder="example@gmail.com"
              type="email"
              className="bg-neutral-200 text-black h-12 px-4 rounded-md w-full"
              required
              />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password*</label>
            <input
              name="password"
              onChange={handleChange}
              value={formData.password}
              id="password"
              placeholder="••• •••"
              type="password"
              className="bg-neutral-200 text-black h-12 px-4 rounded-md w-full"
              required
              />
          </div>
            <button
              type="submit"
              className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${formData.email || formData.password ? '' : 'pointer-events-none'}`}
            >
              {
                load ?
                <Loader/> :
                <div>Register →</div>
              }
            </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
