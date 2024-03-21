import { HoverEffect } from "./ui/card-hover-effect";

const CardHoverEffect = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      description:
        "Tic-Tac-Toe is a 3x3 grid game where players aim to create a row, column, or diagonal of their symbols for victory.",
      link: "https://github.com/Saad-Kamran-2006/Tic-Tac-Toe",
    },
    {
      title: "Rock-Paper-Scissor",
      description:
        "Rock-Paper-Scissors: Hand game with rock, paper, scissors determining the winner based on rules.",
      link: "https://github.com/Saad-Kamran-2006/Rock-Paper-Scissor",
    },
    {
      title: "iNotebook",
      description:
        "iNotebook: Your digital companion for organized note-taking and seamless collaboration.",
      link: "https://github.com/Saad-Kamran-2006/iNotebook",
    },
    {
      title: "News-App",
      description:
        "The News-App aggregates current news articles from diverse sources, providing users with up-to-date information on various topics.",
      link: "https://github.com/Saad-Kamran-2006/News-App-Function-Based",
    },
    {
      title: "React-Utils",
      description:
        "React-Utils is a text utility & software tool designed to manipulate and analyze text data efficiently.",
      link: "https://github.com/Saad-Kamran-2006/React-Utils",
    },
    {
      title: "Routes-Assignment",
      description:
        "Next.js routes define how pages and resources are accessed, offering flexibility and dynamic rendering capabilities.",
      link: "https://github.com/Saad-Kamran-2006/Routes-Assignment",
    },
  ];
  return (
    <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center text-white">
      <div className="min-h-screen">
        <div className="mt-44">
          <HoverEffect items={projects} />
        </div>
      </div>
    </main>
  );
};

export default CardHoverEffect;
