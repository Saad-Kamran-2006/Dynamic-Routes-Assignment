"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const TextGenerate = () => {
  const words =
    "As a frontend developer proficient in Next.js, I possess the expertise to build fast, scalable, and SEO-friendly web applications. Leveraging Next.js, I can create dynamic user interfaces with ease, ensuring seamless navigation and optimal performance. My experience with this framework allows me to efficiently manage state, handle server-side rendering, and implement client-side routing. Additionally, I am adept at integrating Next.js applications with various APIs and backend systems, enhancing their functionality and usability. With my Next.js proficiency, I can contribute to the development of innovative and responsive web solutions.";
  return (
    <div>
      <TextGenerateEffect words={words} />
    </div>
  );
};

export default TextGenerate;
