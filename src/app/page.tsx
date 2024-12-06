import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white ">
      <div className="w-screen h-screen bg-neutral-950 ">
      <p className="pt-40 px-10">
        Achieve Your Dream Tech Job with Personalized AI Guidance!
      </p>
      </div>
      <div className="w-screen h-screen bg-neutral-900 p-10">
        still using those generic roadmaps that have no idea about your skills. 
        <h2 className="text-5xl font-bold leading-snug ">We provide Personalized Roadmap,<br/>Just for You.</h2>
      </div>
      <div className="w-screen h-screen bg-neutral-950 p-10">
        <h2 className="text-5xl font-semibold leading-snug ">study says,<br />Personalized roadmaps are <span className="font-bold text-[#ff4d00]">93%</span> more efficient that others.</h2>
        <p>
          Make a move towards smart learning.<br/>
        </p><br />
        <Link 
            href={"/signup"}
            className="px-10 py-3 border-2 border-[#ff4d00] text-[#ff4d00] text-lg font-semibold rounded-full hover:text-[#fff]">Get Your Roadmap Now
        </Link>
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
