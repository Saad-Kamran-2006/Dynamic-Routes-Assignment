"use client";
import TextGenerate from "./TextGenerate";
import { TypeWriterSkill } from "./TypeWriter";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

const BackgroundBoxes = () => {
  return (
    <div className="min-h-screen relative w-[100vw] overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div
        className={cn(
          "md:text-4xl text-xl flex flex-col items-center text-white mx-40 relative z-20"
        )}
      >
        <TypeWriterSkill />
        <TextGenerate />
      </div>
    </div>
  );
};

export default BackgroundBoxes;
