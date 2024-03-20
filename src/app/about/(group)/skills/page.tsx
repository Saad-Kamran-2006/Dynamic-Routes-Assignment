import BackgroundBoxes from "@/components/BackgroundBoxes";
import { Metadata } from "next";

export const matadata: Metadata = {
  title: "Assignment - Skills",
};

const Skills = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <BackgroundBoxes />
      </div>
    </main>
  );
};

export default Skills;
