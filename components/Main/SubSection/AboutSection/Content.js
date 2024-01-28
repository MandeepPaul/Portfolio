const Content = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="font-headingFont text-lg md:text-xl">
        I build things for the web
      </span>
      <br />
      <p className="my-2 text-sm md:text-base">
        As a full-stack developer, I bring hands-on experience gained through
        the successful completion of diverse projects. With a solid foundation
        in front-end and back-end technologies.
        <br />
        <br />
        <span>
          I would love to hear from you. Whether it&apos;s a project, job
          opportunity, or just a chat.{" "}
          <br className="hidden md:block lg:hidden" />
          Feel free to{" "}
          <a
            href="#Connect"
            className="underline decoration-teal-600 underline-offset-2 text-base md:text-lg"
          >
            contact me.
          </a>
        </span>
      </p>
    </div>
  );
};

export default Content;
