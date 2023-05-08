import { PortableText } from "@portabletext/react";
import ContactForm from "../components/contactForm";

export default function Contact({ copy }) {
  return (
    <section className="relative bg-texture flex flex-col items-center justify-center min-h-screen px-5 py-4 md:p-0 text-black md:w-full">
      <div className="grid grid-cols-1 gap-3 mx-auto max-w-xl">
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
