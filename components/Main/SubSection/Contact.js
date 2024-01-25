import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import Input from "@/components/UI/Input/input";
import CustomButton from "@/components/UI/Buttons/CustomButton";
import { GitHubIcon, LinkedInIcon, SendIcon } from "@/public/SVG/svg";

const Contact = () => {
  const [firstSubmissionCheck, setSubmissionCheck] = useState(true);
  const [submitStatus, setSubmitStatus] = useState("idle"); //"idle", "submitting", "succeed"

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isFormValid, setFormValidity] = useState(true);
  const [prevName, setPrevName] = useState("");

  useEffect(() => {
    if (firstSubmissionCheck) {
      return;
    }

    const identifier = setTimeout(() => {
      setFormValidity(
        name !== "" && email !== "" && subject !== "" && message !== ""
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [name, email, subject, message, firstSubmissionCheck]);

  const onChangeHandler = (event, identifier) => {
    const value = event.target.value;
    if (identifier === "name") setName(value);
    else if (identifier === "email") setEmail(value);
    else if (identifier === "subject") setSubject(value);
    else if (identifier === "message") setMessage(value);
  };

  useEffect(() => {
    if (submitStatus === "succeed") {
      setTimeout(() => {
        setSubmitStatus("idle");
        setPrevName("");
      }, 4000);
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Activating auto checker
    setSubmissionCheck(false);

    const validCheck =
      name !== "" && email !== "" && subject !== "" && message !== "";
    setFormValidity(validCheck);

    if (!validCheck) return;

    // If data is valid, send it to the server
    try {
      setSubmitStatus("submitting");
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
        setSubmitStatus("succeed");

        //Name backup for displaying message after form submission.
        setPrevName(name);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        //Disabling Auto checker
        setSubmissionCheck(true);
      } else {
        const errorResponse = await response.json();
        setSubmitStatus("idle");
        setFormValidity(false);

        if (errorResponse && errorResponse.missingFields) {
          // Handle missing fields on the client side
          console.error(errorResponse);
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
    <SectionWrapper id="Connect" className="bg-opacity-50">
      <Heading>
        Get In{" "}
        <span className="gradient-text-teal-sky">&#60; / Touch &#62;</span>
      </Heading>
      <div className="h-[60vh] mx-4">
        <form className="h-full max-w-[1024px] mx-auto m-2 p-2 gap-2 grid grid-cols-1 grid-rows-8 md:grid-rows-7 md:grid-cols-2 md:grid-flow-row md:items-start md:h-auto md:gap-3">
          {!isFormValid || submitStatus === "succeed" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className={`row-span-2 p-2 h-auto md:row-span-1 md:h-10 md:col-span-2 ${
                submitStatus === "succeed"
                  ? "bg-teal-600 text:xs"
                  : "bg-red-500"
              }`}
            >
              {submitStatus === "succeed"
                ? `Thank you ${prevName} for reaching out! We'll be in touch as soon as possible.`
                : `*All fields are required`}
            </motion.div>
          ) : (
            <div className="row-span-2 md:row-span-1 md:h-10 md:col-span-2" />
          )}
          <Input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => onChangeHandler(event, "name")}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => onChangeHandler(event, "email")}
          />

          <Input
            className={`mb-1 md:mb-0 md:col-span-2`}
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(event) => onChangeHandler(event, "subject")}
          />
          <textarea
            className={`p-4 bg-neutral-100 outline-none text-black row-span-4 h-full md:col-span-2 focus:border-b-4 focus:border-teal-600`}
            required={true}
            placeholder="Message"
            value={message}
            onChange={(event) => onChangeHandler(event, "message")}
          />
          <div className="flex justify-between items-center md:col-span-2">
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mndeepkumar/"
              >
                <LinkedInIcon className="fill-white inline-block h-8 w-8 hover:fill-blue-500" />
              </a>
              <a target="_blank" href="https://github.com/MandeepPaul">
                <GitHubIcon className="fill-white inline-block h-8 w-8 hover:fill-gray-500" />
              </a>
            </div>
            <CustomButton
              onClick={handleSubmit}
              className="min-w-[100px] border-white no-underline"
              title={`${
                submitStatus === "submitting" ? "Submitting..." : "Submit"
              }`}
              disabled={submitStatus === "submitting"}
              SVG={SendIcon}
            />
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
