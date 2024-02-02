// These styles apply to every route in the application
import "./output.css";

export const metadata = {
  title: "Welcome!",
  description: "By Mandeep",
};

export default function layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black max-w-[1440px] mx-auto">{children}</body>
    </html>
  );
}
