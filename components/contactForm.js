import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, handleChange };
};

const ContactForm = () => {
  const { values, handleChange } = useContactForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    });
  };

  const inputClasses =
    "rounded-md p-2 bg-white border-2 border-black mb-3 focus:outline-blue-500";

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className={inputClasses}
        required
        id="name"
        value={values.name}
        onChange={handleChange}
        type="text"
        placeholder="Your name"
      />
      <input
        className={inputClasses}
        required
        id="email"
        value={values.email}
        onChange={handleChange}
        type="email"
        placeholder="Your email"
      />
      <input
        className={inputClasses}
        required
        id="subject"
        value={values.subject}
        onChange={handleChange}
        type="text"
        placeholder="Subject"
      />
      <textarea
        className={inputClasses}
        required
        value={values.message}
        onChange={handleChange}
        id="message"
        rows={8}
        placeholder="Message"
      />
      <button
        className="self-center p-4 text-xl text-white transition bg-black rounded-md font-pacifico hover:scale-105"
        type="submit"
        value="Submit"
      >
        Send&nbsp; &#x1F3F9;
      </button>
    </form>
  );
};

export default ContactForm;
