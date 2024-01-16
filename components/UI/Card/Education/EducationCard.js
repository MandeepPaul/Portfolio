import { LinkArrow } from "@/public/SVG/svg";
import ImageCard from "./ImageCard";
import CardDetails from "./CardDetails";

const EducationCard = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:grid-flow-row">
      <div className="md:h-full md:flex md:flex-col md:justify-between">
        <ImageCard
          url="https://play-lh.googleusercontent.com/oDuTGEHru1KMr3QOfQfPKgIdNnlq3WWQxpBYND23r2a7RVnS1HW0t7dyON86Vn_QhtM"
          bgColor="bg-neutral-900"
        />
        <CardDetails className="md:hidden" />
        <ImageCard
          url="https://www.uwinnipeg.ca/branding/images/logos/uw-logo-centre-stack-rgb-white.png"
          bgColor="bg-neutral-900"
        />
        <CardDetails className="md:hidden" />
      </div>
      <div className="hidden md:h-full md:flex md:flex-col md:justify-between md:space-y-4">
        <CardDetails />
        <CardDetails />
      </div>
    </div>
  );
};

export default EducationCard;
