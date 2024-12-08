import FlickeringGrid from "@/components/ui/flickering-grid";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";

export default function Home() {
  const theme = "dark";
  return (
    <div className="min-h-screen text-white ">
      <div className="w-screen h-screen bg-netural-950">
        <div className="h-1/2 mx-10 mt-28 rounded-xl bg-[#ff4d00] p-5">
        <h2 className="w-2/6 text-5xl font-extrabold text-black">Master Coding with Personalized Learning Plans</h2>
        <p className="md:w-1/2 font-mono mt-5">CodingAashram leverages AI to create personalized learning paths based on your current skills, guiding you to land your dream software development job.</p>
        </div>
        <div className="h-1/4 mx-10 my-5 rounded-xl flex gap-5">
          <div className="h-full w-3/4 rounded-xl bg-neutral-100">
          </div>
          <div className="h-full w-1/4 rounded-xl bg-neutral-500 p-5">
            <ul className="">
              <li className="text-white text-xl font-semibold text-right m-3">AI-Driven Roadmaps</li>
              <li className="text-white text-xl font-semibold text-right m-3">Skill-Based Learning</li>
              <li className="text-white text-xl font-semibold text-right m-3">Career-Ready Guidance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-screen h-full bg-neutral-950 overflow-hidden">
        <div className="px-16 py-20">
          <p className="text-lg font-mono font-thin">
            are you still using those generic roadmaps that have no idea about your skills. 
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug ">We provide <span className="text-[#ff4d00]">Personalized Roadmap</span>,<br/>Just for You<br/>According to Your :</h2>
          <div className="w-full flex items-center gap-2 md:gap-7 justify-around flex-wrap my-5">
            <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg md:text-3xl py-10 w-1/3 md:w-1/5"
                gradientColor={theme === "dark" ? "#ff4d00" : "#fff"}
              >
                Skills
              </MagicCard>
              <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg md:text-3xl py-10 w-1/2 md:w-1/5"
                gradientColor={theme === "dark" ? "#ff4d00" : "#fff"}
              >
                Achivement
              </MagicCard>
              <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg md:text-3xl py-10 w-1/2 md:w-1/5"
                gradientColor={theme === "dark" ? "#ff4d00" : "#fff"}
              >
                Requirement
              </MagicCard>
              <MagicCard
                className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-lg md:text-3xl py-10 w-1/3 md:w-1/5"
                gradientColor={theme === "dark" ? "#ff4d00" : "#fff"}
              >
                Goal
              </MagicCard>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-neutral-950">
        <div className="w-full absolute z-10 p-16">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug ">study says,<br />Personalized roadmaps are <span className="font-bold text-[#ff4d00]">73%</span> more efficient that others.</h2>
          <p className="text-lg font-mono font-thin">
            Make a move towards smart learning.<br/>
          </p><br />
          <Link 
              href={"/signin"}
              className="px-5 md:px-10 py-3 border-2 border-[#ff4d00] text-[#ff4d00] text-lg font-semibold rounded-full hover:text-[#fff]">Discover Your Path
          </Link>
        </div>
        <FlickeringGrid
          className="z-0 absolute w-screen bg-black overflow-hidden"
          squareSize={100}
          gridGap={2}
          color="#ff4d00"
          maxOpacity={0.2}
          flickerChance={0.2}
          height={800}
          width={7000}
        />
      </div>
      <div className="max-h-screen flex justify-center">
        <div className="my-40">
          <h1 className="text-center font-semibold text-4xl md:text-6xl my-5">coding<span className="text-[#FF4D00]">आश्रम</span></h1>
          <p className="flex flex-col md:flex-row mt-10 md:mt-0 font-mono text-center tracking-[3px] text-[#ff4d00]"><span className="md:mx-2">Smart Prep</span>|<span className="md:mx-2">Smarter Placements</span>|<span className="md:mx-2">Smart Folks</span></p>
          <div className="w-full mt-10 md:px-20 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
            <Link 
            href={"/signup"}
            className="px-10 py-3 border-2 border-[#ff4d00] text-[#ff4d00] text-lg font-semibold rounded-full hover:text-[#fff]">signUp
            </Link>
            <Link 
            href={"/login"}
            className="px-10 py-3 border-2 border-[#ff4d00] text-[#ff4d00] text-lg font-semibold rounded-full hover:text-[#fff]">login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
