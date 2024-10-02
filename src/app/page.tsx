import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex justify-center">
      <div className="mt-40">
        <h1 className="text-center font-semibold text-4xl md:text-6xl my-5">coding<span className="text-[#FF4D00]">आश्रम</span></h1>
        <p className="flex flex-col md:flex-row mt-10 md:mt-0 font-mono text-center tracking-[3px] text-[#ff4d00]"><span>Smart Prep</span>|<span>Smarter Placements</span>|<span>Smart Folks</span></p>
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
  );
}
