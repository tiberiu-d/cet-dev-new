"use client";
import { DummyTextLG, DummyTextMD } from "./dummy-text";

import { useRef, useState } from "react";

const TestPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const fctScrollToBottom = () => {
    console.log(
      `viewport width: ${window.innerWidth} height: ${window.innerHeight}`
    );

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollHeight = scrollContainer.scrollHeight;
      const elementHeight = scrollContainer.clientHeight;
      const scrollTo = scrollHeight - elementHeight;

      scrollContainer.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-gray-500 h-full flex flex-col items-top">
      <div className="w-full bg-pink-200">
        <button onClick={fctScrollToBottom} disabled={isScrolledToBottom}>
          click me
        </button>
      </div>
      <div className="w-full bg-blue-200 pb-6">
        <DummyTextMD />
      </div>
      <div
        className="w-full bg-green-200 flex-grow overflow-y-auto relative"
        ref={scrollContainerRef}
        onScroll={() => setIsScrolledToBottom(false)}
      >
        <div className=" bg-red-400 sticky top-0 p-4">test</div>
        <DummyTextLG />
        <DummyTextLG />
      </div>
    </div>
  );
};
export default TestPage;
