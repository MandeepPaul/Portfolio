const SectionWrapper = ({ id, className, children }) => {
  return (
    <section id={id} className={`mx-10 py-6 space-y-10 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
