import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [invalidFields, markInvalid] = useState([]);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  useEffect(() => {}, [invalidFields]);

  const getInvalidClass = (fieldName) => {
    return invalidFields.includes(fieldName) && "border-b-4 border-red-500";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!subject) missingFields.push("subject");
    if (!message) missingFields.push("message");

    markInvalid([...missingFields]);

    if (invalidFields.length > 0) return;

    // If data is valid, send it to the server
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        // Email sent successfully, handle success on the client side
        console.log("Email sent successfully");
        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
      } else {
        const errorResponse = await response.json();
        if (errorResponse && errorResponse.missingFields) {
          // Handle missing fields on the client side
          markInvalid([...errorResponse.missingFields]);
        } else {
          // Handle other errors when sending email
          console.error("Failed to send email");
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <SectionWrapper id="Connect" className="bg-yello-600 bg-opacity-50">
      <Heading>
        Get In{" "}
        <span className="gradient-text-teal-sky">&#60; / Touch &#62;</span>
      </Heading>
      <div className="h-[60vh] mx-4">
        <form className="h-full max-w-[1024px] mx-auto flex flex-col m-2 p-2 gap-2 md:grid md:grid-rows-7 md:grid-cols-2 md:grid-flow-row md:items-start md:h-auto md:gap-3">
          {invalidFields.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="h-10 bg-red-500 p-2 md:col-span-2"
            >
              *All fields are required
            </motion.div>
          ) : (
            <div className="h-10 md:col-span-2" />
          )}
          <Input
            ref={nameRef}
            className={`${getInvalidClass("name")}`}
            name="name"
            placeholder="Name"
          />
          <Input
            ref={emailRef}
            className={`${getInvalidClass("email")}`}
            name="email"
            type="email"
            placeholder="Email"
          />

          <Input
            ref={subjectRef}
            className={`mb-1 md:mb-0 md:col-span-2 ${getInvalidClass(
              "subject"
            )}`}
            name="subject"
            placeholder="Subject"
          />
          <textarea
            ref={messageRef}
            className={`h-[50%] bg-neutral-100 p-4 outline-none text-black md:col-span-2 md:row-span-4 md:h-full focus:border-b-4 focus:border-teal-600 invalid:border-b-4 invalid:border-red-600 ${getInvalidClass(
              "message"
            )}`}
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
