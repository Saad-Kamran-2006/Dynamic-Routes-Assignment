import ContactFoam from "@/components/ContactFoam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment - Contact",
};

const page = () => {
  return (
    <div>
      <ContactFoam />
    </div>
  );
};

export default page;
