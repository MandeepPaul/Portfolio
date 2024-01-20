const Heading = ({ className = "", children }) => {
  return (
    <h2
      className={`text-center font-headingFont3 bg-gradient-to-b from-black via-neutral-950 to-transparent py-16 text-4xl md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
