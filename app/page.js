"use client";

import App from "@/components/Spline/App";
import Header from "../components/Header/Header";
import Main from "@/components/Main/Main";

export default function Page() {
  return (
    <div className="h-screen">
      <App />
      <Header />
      <Main />
    </div>
  );
}
