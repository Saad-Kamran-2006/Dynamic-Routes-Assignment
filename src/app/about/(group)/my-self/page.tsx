import Sparkles from "@/components/Sparkles";
import { Metadata } from "next";

export const matadata: Metadata = {
  title: "Assignment - My-Self",
};

const MySelf = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Sparkles />
    </main>
  );
};

export default MySelf;
