"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const TypeWriter = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "My",
    },
    {
      text: "name",
    },
    {
      text: "is",
    },
    {
      text: "Saad Kamran.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="pb-20">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default TypeWriter;

const TypeWriterSkill = () => {
  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    {
      text: "Skill's",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Page.",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export { TypeWriterSkill };
