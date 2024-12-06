"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {cn} from "@/lib/utils.ts"
import Link from "next/link";
import axios from "axios";

function Page() {
    const [data, setData] = useState({
        duration: 0,
        roles: [""],
        companies: [""],
        priorKnowledges: [
          {
            skill: "",
            level: "",
          },
        ],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.duration <= 0) {
          alert("Duration must be greater than 0.");
          return;
        }
      
        if (data.roles.some(role => role === "")) {
          alert("Please select a role for each entry.");
          return;
        }
      
        if (data.companies.some(company => company === "")) {
          alert("Please select a company for each entry.");
          return;
        }
      
        if (data.priorKnowledges.some(pk => pk.skill === "" || pk.level === "")) {
          alert("Please fill out all prior knowledge fields.");
          return;
        }console.log("Form Data Submitted:", data);


        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/personalinfo`, data, {  
          headers: { 
            "authorization" : localStorage.getItem("jwtToken") 
          }
        })
        .then(async function (response) {
          console.log("response - ",response);
          if(response.status === 201){
            setData({
                duration: 0,
                roles: [""],
                companies: [""],
                priorKnowledges: [{ skill: "", level: "" }],
            });
          }

        })
        .catch(function (error) {
          console.log(error);
        });
      
        
      };
      
    const handleInput = (e) => {
        const { name, value } = e.target;
      
        // Update duration field
        if (name === "duration") {
          setData({ ...data, [name]: value });
        }
      };
      
      const handleRoleChange = (index, value) => {
        const newRoles = [...data.roles];
        newRoles[index] = value;
        setData({ ...data, roles: newRoles });
      };
      
      const handleCompanyChange = (index, value) => {
        const newCompanies = [...data.companies];
        newCompanies[index] = value;
        setData({ ...data, companies: newCompanies });
      };
      
      const handleSkillChange = (index, value) => {
        const newPriorKnowledges = [...data.priorKnowledges];
        newPriorKnowledges[index].skill = value;
        setData({ ...data, priorKnowledges: newPriorKnowledges });
      };
      
      const handleLevelChange = (index, value) => {
        const newPriorKnowledges = [...data.priorKnowledges];
        newPriorKnowledges[index].level = value;
        setData({ ...data, priorKnowledges: newPriorKnowledges });
      };
      
      const addRole = () => {
        setData({ ...data, roles: [...data.roles, ""] });
      };
      
      const addCompany = () => {
        setData({ ...data, companies: [...data.companies, ""] });
      };
      
      const addPriorKnowledge = () => {
        setData({
          ...data,
          priorKnowledges: [...data.priorKnowledges, { skill: "", level: "" }],
        });
      };
return (
<div className="w-screen my-20 flex items-center justify-center">
    <div className="bg-neutral-950 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
    <h2 className="font-bold text-3xl text-neutral-400">
        Welcome to <span className="text-white">coding<span className="text-[#FF4D00]">आश्रम</span></span>
    </h2>
    <p className="text-md font-semibold max-w-sm mt-2 text-[#ff4d00]">
        Details for new Roadmap
    </p>
    <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
        star(*) marked fields are mandatory to fill
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="duration">Duration*</Label>
            <Input
            name="duration"
            onChange={handleInput}
            value={data.duration}
            id="duration"
            placeholder="duration in months"
            type="number"
            />
        </LabelInputContainer>

        {data.roles.map((role, index) => (
            <div
            key={index}
            className="w-full flex flex-col items-center justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"
            >
            <LabelInputContainer className="mb-4">
                <Label htmlFor="roles">Roles*</Label>
                <select
                name="roles"
                onChange={(e) => handleRoleChange(index, e.target.value)}
                value={role}
                id="roles"
                className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                >
                <option disabled value="">
                    Select a Role
                </option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="AI Developer">AI Developer</option>
                </select>
            </LabelInputContainer>
            <button
                type="button"
                className="w-1/5 bg-[#ff4d00] rounded-lg flex items-center justify-center"
                onClick={addRole}
            >
                <p className="text-3xl">+</p>
            </button>
            </div>
        ))}

        {data.companies.map((company, index) => (
            <div
            key={index}
            className="w-full flex flex-col items-center justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"
            >
            <LabelInputContainer className="mb-4">
                <Label htmlFor="companies">Companies*</Label>
                <select
                name="companies"
                onChange={(e) => handleCompanyChange(index, e.target.value)}
                value={company}
                id="companies"
                className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                >
                <option disabled value="">
                    Select a Company
                </option>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
                <option value="Apple">Apple</option>
                <option value="Adobe">Adobe</option>
                <option value="Medium">Medium</option>
                <option value="Samsung">Samsung</option>
                </select>
            </LabelInputContainer>
            <button
                type="button"
                className="w-1/5 bg-[#ff4d00] rounded-lg flex items-center justify-center"
                onClick={addCompany}
            >
                <p className="text-3xl">+</p>
            </button>
            </div>
        ))}

        {data.priorKnowledges.map((priorKnowledge, index) => (
            <div
            key={index}
            className="w-full flex flex-col items-center justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"
            >
            <div className="w-4/5">
                <LabelInputContainer className="mb-4">
                <Label htmlFor="skill">Skill*</Label>
                <select
                    name="skill"
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    value={priorKnowledge.skill}
                    id="skill"
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                >
                    <option disabled value="">
                    Select a Skill
                    </option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="Go">Go</option>
                </select>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                <Label htmlFor="level">Level*</Label>
                <select
                    name="level"
                    onChange={(e) => handleLevelChange(index, e.target.value)}
                    value={priorKnowledge.level}
                    id="level"
                    className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-violet-700 dark:focus-visible:ring-violet-700
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
                >
                    <option disabled value="">
                    Select a Level
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                </LabelInputContainer>
            </div>

            <button
                type="button"
                className="w-1/5 py-10 bg-[#ff4d00] rounded-lg flex items-center justify-center"
                onClick={addPriorKnowledge}
            >
                <p className="text-3xl">+</p>
            </button>
            </div>
        ))}
        <Link href={`/profile`} className={`${data.duration && data.companies && data.roles && data.priorKnowledges ? "" : "pointer-events-none"}`}>        
          <button
          className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
          type="submit"
          >
          Create Roadmap  &rarr;
          <BottomGradient />
          </button>
        </Link>
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