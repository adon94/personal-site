import { PortableText } from "@portabletext/react";
import ContactForm from "./contactForm";

export default function Contact({ copy }) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-5 py-4 mx-auto text-black md:w-1/2 snap-start">
      <div className="grid grid-cols-1 gap-3">
        <h2 className="text-xl text-center md:text-2xl font-pacifico">
          {copy.contactTitle}
        </h2>
        <div className="flex flex-col items-center self-center p-2 text-xl text-center bg-white border-2 border-black rounded-md md:p-5 md:text-xl">
          <PortableText value={copy.contactDescription} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
