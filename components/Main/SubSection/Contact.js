import { useRef } from "react";

import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import Input from "@/components/UI/Input/input";
import WorkCardButton from "@/components/UI/Buttons/CustomButton";
import {
  GitHubIcon,
  LinkedInIcon,
  SendIcon,
  TwitterIcon,
} from "@/public/SVG/svg";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const personName = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    // Basic client-side validation
    if (!personName || !email || !subject || !message) {
      console.error("Please fill in all fields");
      return;
    }

    // If data is valid, send it to the server
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personName,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        // Email sent successfully, handle success on the client side
        console.log("Email sent successfully");
        // nameRef.current.value = "";
        // emailRef.current.value = "";
        // subjectRef.current.value = "";
        // messageRef.current.value = "";
      } else {
        // Handle error when sending email
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <SectionWrapper id="Connect" className="bg-yello-600 bg-opacity-50">
      <Heading className="bg-gradient-to-b from-black via-black to-transparent md:sticky md:top-0">
        Get In{" "}
        <span className="gradient-text-teal-sky">&#60; / Touch &#62;</span>
      </Heading>
      <div className="h-[60vh] mx-4">
        <form className="h-full max-w-[1024px] mx-auto flex flex-col m-2 p-2 gap-2 md:grid md:grid-rows-6 md:grid-cols-2 md:grid-flow-row md:items-start md:h-auto md:gap-3">
          <Input
            ref={nameRef}
            className="grow-0"
            name="personName"
            placeholder="Name"
          />
          <Input
            ref={emailRef}
            className="grow-0"
            name="personEmail"
            type="email"
            placeholder="Email"
          />

          <Input
            ref={subjectRef}
            className="mb-1 md:mb-0 md:col-span-2 grow-0"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            ref={messageRef}
            className="h-[50%] bg-neutral-100 p-4 outline-none text-black md:col-span-2 md:row-span-4 md:h-full"
            placeholder="Message"
          />
          <div className="flex justify-between items-center md:col-span-2">
            <div className="flex gap-1 lg:gap-4">
              <LinkedInIcon className="fill-white inline-block h-8 w-8" />
              <GitHubIcon className="fill-white inline-block h-8 w-8" />
              <TwitterIcon className="fill-white inline-block h-8 w-8" />
            </div>
            <WorkCardButton
              onClick={handleSubmit}
              className="min-w-[100px] border-white"
              title="CONNECT"
              SVG={SendIcon}
            />
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
