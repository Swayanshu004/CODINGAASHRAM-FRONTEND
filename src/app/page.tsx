import Marquee from "@/components/ui/marquee";
import Particles from "@/components/ui/particles";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Item {
  name: string;
  icon: string;
  color: string;
}

export default function Home() {
  const theme = "dark";
  let notifications = [
    {
      name: "Skill-Based Learning",
      icon: "🎓",
      color: "#FFA800",
    },
    {
      name: "Career-Ready Guidance",
      icon: "🎖️",
      color: "#FF6624",
    },
    {
      name: "Tailored for You",
      icon: "✨",
      color: "#ff4d00",
    },
    {
      name: "AI-Driven Roadmaps",
      icon: "🎯",
      color: "#FF2E00",
    },
  ];
  const reviews = [
    {
      name: "Someone",
      username: "CS student",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Someone",
      username: "Assistant Prof.",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Someone",
      username: "CS Student",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Someone",
      username: "Parents",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Someone",
      username: "Assistant Prof.",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Someone",
      username: "CS student",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
   
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
  notifications = Array.from({ length: 77 }, () => notifications).flat();
  const Notification = ({ name, icon, color }: Item) => {
    return (
      <figure
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-5/6 cursor-pointer overflow-hidden rounded-2xl px-4 py-2",
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          "transform-gpu dark:bg-neutral-950 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: color,
            }}
          >
            <span className="text-xl">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm md:text-md">{name}</span>
              <span className="mx-1">·</span>
            </figcaption>
          </div>
        </div>
      </figure>
    );
  };

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className="min-h-screen text-white ">
      <div className="w-screen h-screen bg-netural-950">
        <div className="h-fit mx-10 mt-28 rounded-xl bg-[#ff4d00] py-7 px-5 flex">
          <div>
            <h2 className="w-full md:w-2/6 text-4xl md:text-5xl font-extrabold text-black">Master Coding with Personalized Learning Plans</h2>
            <p className="md:w-1/2 font-mono mt-5"><b>CodingAashram</b> leverages AI to create personalized learning paths based on your current skills, guiding you to land your dream software development job.</p>
          </div>
          <div></div>
        </div>
        <div className="h-2/4 md:h-1/4 mx-10 my-5 rounded-xl flex flex-col md:flex-row gap-5">
          <div className="md:h-full md:w-3/4 rounded-xl bg-transparent md:bg-neutral-200 text-xs md:text-lg font-bold text-black flex items-center justify-around gap-2">
            <h2 className="border-2 px-2 py-4 md:py-10 md:px-7 rounded-md md:rounded-xl bg-neutral-300 md:bg-[#ff4d00]">1.Create account</h2>
            <h2 className="border-2 px-2 py-4 md:py-10 md:px-7 rounded-md md:rounded-xl bg-neutral-300 md:bg-[#ff4d00]">2.Provide Details</h2>
            <h2 className="border-2 px-2 py-4 md:py-10 md:px-7 rounded-md md:rounded-xl bg-neutral-300 md:bg-[#ff4d00]">3.Generate Roadmap</h2>
            <h2 className="border-2 px-2 py-4 md:py-10 md:px-7 rounded-md md:rounded-xl bg-neutral-300 md:bg-[#ff4d00]">4.Follow It</h2>
          </div>
          <div className="h-2/3 md:h-full md:w-1/4 rounded-xl p-5 relative flex flex-col overflow-hidden border bg-neutral-600 md:shadow-xl">
              <AnimatedList>
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </AnimatedList>
          </div>
        </div>
      </div>
      <div className="w-screen h-full bg-neutral-950 overflow-hidden relative">
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={80}
          color={"#ff4d00"}
          refresh
        />
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
      <div className="w-screen h-screen bg-neutral-950 relative">
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={"#ff4d00"}
          refresh
        />
        <div className="w-full px-16 py-5">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug ">study says,<br />Personalized roadmaps are <span className="font-bold text-[#ff4d00]">73%</span> more efficient that others.</h2>
          <p className="text-lg font-mono font-thin">
            Make a move towards smart learning.<br/>
          </p><br />
          <Link 
              href={"/signin"}
              className="px-5 md:px-10 py-3 border-2 border-[#ff4d00] text-[#ff4d00] text-lg font-semibold rounded-full hover:text-[#fff]">Discover Your Path
          </Link>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
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
