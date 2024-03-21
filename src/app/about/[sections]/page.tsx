import { metadata } from "@/app/layout";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import CardHoverEffect from "@/components/HoverEffect";
import Sparkles from "@/components/Sparkles";

interface Params {
  params: {
    sections: string;
  };
}

const Sections = ({ params }: Params) => {
  const section = params.sections;
  return (
    <main>
      {section === "my-self" ? (
        <Sparkles />
      ) : section === "skills" ? (
        <BackgroundBoxes />
      ) : section === "projects" ? (
        <CardHoverEffect />
      ) : (
        ""
      )}
      {section === "my-self"
        ? (metadata.title = "Assignment - My-Self")
        : section === "skills"
        ? (metadata.title = "Assignment - Skills")
        : section === "projects"
        ? (metadata.title = "Assignment - Projects")
        : ""}
    </main>
  );
};

export default Sections;
