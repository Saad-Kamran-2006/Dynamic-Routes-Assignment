import { BackgroundBeams } from "@/components/ui/background-beams";

function ContactFoam() {
  return (
    <>
      <main className=" h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl mt-[3.5rem] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            We're always here to help you with any question.
          </p>
          <input
            type="text"
            placeholder="Enter email adress"
            className="rounded-md h-12 pl-2 border text-sm lowercase border-neutral-800 focus:ring-2 focus:ring-neutral-950 w-full relative z-10 mt-4 text-white bg-black placeholder:text-neutral-700"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            className="rounded-md pl-2 pt-1 text-sm border border-neutral-800 focus:ring-2 focus:ring-neutral-950 w-full relative z-10 mt-4 mb-3 bg-black text-white placeholder:text-neutral-700"
          ></textarea>
        </div>
        <button className="cursor-pointer text-sm text-white bg-teal-700 pl-5 pr-5 pt-3 pb-3 rounded-md">
          Send Message
        </button>
        <BackgroundBeams />
      </main>
    </>
  );
}

export default ContactFoam;
