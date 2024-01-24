"use client";

import App from "@/components/Spline/App";
import Header from "../components/Header/Header";
import Main from "@/components/Main/Main";
import { useState } from "react";

export default function Page() {
  const [prev, setPrev] = useState(0);
  const [latest, setLatest] = useState(0);

  const scrollChangeHandler = (prev, latest) => {
    setPrev(prev);
    setLatest(latest);
  };

  return (
    <>
      <div id="back-drop"></div>

      <div id="root" className="relative">
        <Header prevScroll={prev} latestScroll={latest} />
        <Main scrollChange={scrollChangeHandler} />
      </div>
    </>
  );
}
