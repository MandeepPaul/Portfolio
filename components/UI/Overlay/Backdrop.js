const Backdrop = ({ backdrop, reset, children }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-[200%] z-30 bg-stone-900 opacity-70 ${backdrop}`}
        onClick={reset}
      />
      {children}
    </>
  );
};

export default Backdrop;
