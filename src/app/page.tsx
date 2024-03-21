import { WavyBackground } from "@/components/ui/wavy-background";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment - Home",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          This is Home Page
        </h1>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Welcome to our website
        </p>
      </WavyBackground>
    </main>
  );
}
