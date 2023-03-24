import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-5 py-4 mx-auto text-black md:w-1/2 snap-start">
      <div className="grid grid-cols-1 gap-3">
        <h2 className="text-xl text-center md:text-2xl font-pacifico">
          I would love to hear from you.
        </h2>
        <div className="flex flex-col items-center self-center p-2 bg-white border-2 border-black md:p-5 rounded-3xl">
          <p className="text-xl text-center md:text-xl">
            I&apos;m currently interested in <b>remote front end developer</b>{" "}
            roles with a focus on <b>React</b> and <b>Web3</b>, but also open to
            other opportunities.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
