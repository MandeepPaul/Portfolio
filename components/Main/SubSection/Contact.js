import { useState } from "react";

import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import Input from "@/components/UI/Input/input";
import WorkCardButton from "@/components/UI/Buttons/CustomButton";
import { SendIcon } from "@/public/SVG/svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <SectionWrapper id="#Contact" className="bg-yello-600 bg-opacity-50">
      <Heading className="bg-gradient-to-b from-black via-black to-transparent md:sticky md:top-0">
        Get In{" "}
        <span className="gradient-text-teal-sky">&#60; / Touch &#62;</span>
      </Heading>
      <div className="h-[60vh] mx-4">
        <form className="h-full max-w-[1024px] mx-auto flex flex-col m-2 p-2 gap-2 md:grid md:grid-rows-4 md:grid-cols-2 md:grid-flow-col md:items-start md:h-auto lg:h-[60%] md:gap-4 lg:gap-x-6">
          <Input
            className="lg:h-[80%]"
            name="personName"
            placeholder="Name"
            value={formData.name}
          />
          <Input
            className="lg:h-[80%] lg:self-center"
            name="personEmail"
            placeholder="Email"
            value={formData.email}
          />

          <Input
            className="mb-1 md:mb-0 lg:h-[80%] lg:self-end"
            name="subject"
            placeholder="Subject"
            value={formData.email}
          />
          <textarea
            className="h-[50%] bg-neutral-100 p-4 outline-none md:row-span-3 md:h-full"
            value={formData.message}
            placeholder="Message"
          />
          <WorkCardButton
            className="self-center w-[100px] md:col-span-2"
            title="SEND"
            SVG={SendIcon}
          />
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
