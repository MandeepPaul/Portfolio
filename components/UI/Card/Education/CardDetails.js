import { LinkArrow } from "@/public/SVG/svg";

const CardDetails = ({ className }) => {
  return (
    <div className={`py-4 flex flex-col gap-4 md:py-[140px] ${className}`}>
      <div className="flex gap-3 flex-wrap">
        {[
          "React",
          "React Router",
          "React Query",
          "Next JS",
          "Unit Testing",
        ].map((item, index) => (
          <span
            key={index}
            className="px-3 py-0.5 border-teal-600 border-[0.5px] rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <h2 className="text-3xl">
        React - The Complete Guide 2024 (incl. React Router & Redux)
      </h2>
      <ul className="list-disc px-4">
        <li>
          Learned React from the ground up and completed the course as an
          advanced React developer
        </li>
        <li>Learned all about React Hooks and React Components</li>
        <li>
          Managed complex state efficiently with React's Context API & React
          Redux
        </li>
        <li>
          Built standalone React apps & applications connected to a backend via
          HTTP
        </li>
        <li>
          Learned about routing & route-related data fetching with React Router
        </li>
        <li>Built fullstack React apps with NextJS</li>
      </ul>

      <a
        href="https://www.udemy.com/certificate/UC-3942cc44-e756-4102-98c1-2133fed8a31d/"
        target="_blank"
        className="flex items-center pt-4 gap-2 hover:underline underline-offset-2"
      >
        <span>See Certificate </span>
        <LinkArrow />
      </a>
    </div>
  );
};

export default CardDetails;
