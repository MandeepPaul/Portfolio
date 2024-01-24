import ImageCard from "./ImageCard";
import CardDetails from "./CardDetails";

const EducationCard = ({ className }) => {
  return (
    <div
      className={`mx-auto grid grid-cols-1 sm:w-[350px] md:gap-4 md:w-auto md:mx-10 md:grid-cols-2 md:grid-flow-row ${className}`}
    >
      <div className="px-4 h-full flex flex-col md:px-0 md:justify-around md:justify-self-end">
        <div className="p-4 rounded-lg bg-neutral-950  md:w-full md:h-full mb-10 md:p-0 md:m-0 md:sticky md:top-[25dvh]">
          <ImageCard url="/PNG/udemy-logo.png" bgColor="bg-indigo-900" />
          <CardDetails className="mb-10 md:hidden" />
        </div>
        <div className="p-4 rounded-lg bg-neutral-950  md:w-full md:h-full md:p-0 md:m-0 md:flex md:flex-col md:justify-center md:sticky md:top-[25dvh]">
          <ImageCard
            url="https://www.uwinnipeg.ca/branding/images/logos/uw-logo-centre-stack-rgb-white.png"
            bgColor="bg-red-800"
          />
          <CardDetails className="md:hidden" />
        </div>
      </div>
      <div className="hidden md:h-full md:flex md:flex-col md:justify-between md:space-y-4 bg-opacity-50">
        <CardDetails />
        <CardDetails />
      </div>
    </div>
  );
};

export default EducationCard;
