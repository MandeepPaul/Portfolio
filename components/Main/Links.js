import { GitHubIcon, LinkedInIcon } from "@/public/SVG/svg";

const Links = () => {
  return (
    <ul className="flex lg:flex-col gap-5 z-20 fixed -top-3 right-3 lg:top-auto lg:right-auto lg:bottom-5 lg:left-5">
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/mndeepkumar/">
          <LinkedInIcon className="fill-white h-6 w-6 hover:fill-blue-500" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/MandeepPaul">
          <GitHubIcon className="fill-white h-6 w-6 hover:fill-gray-500" />
        </a>
      </li>
      <li className="hidden lg:block bg-white lg:h-[100px] lg:mx-auto lg:w-[0.5px]" />
    </ul>
  );
};

export default Links;
