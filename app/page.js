"use client";

import App from "@/components/Spline/App";
import Header from "../components/Header/Header";
import Main from "@/components/Main/Main";

export default function Page() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <App />
      <Header />
      <Main />
    </div>
  );
}
