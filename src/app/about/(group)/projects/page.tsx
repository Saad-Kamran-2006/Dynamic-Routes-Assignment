import CardHoverEffect from "@/components/HoverEffect";
import { Metadata } from "next";

export const matadata: Metadata = {
  title: "Assignment - Projects",
};

const Projects = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center text-white">
      <CardHoverEffect />
    </div>
  );
};

export default Projects;
