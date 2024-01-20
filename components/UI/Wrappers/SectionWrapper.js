const SectionWrapper = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`py-2 space-y-4 min-h-screen md:py-6 md:space-y-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
