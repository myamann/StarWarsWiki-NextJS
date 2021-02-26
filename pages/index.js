import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../starwars.json"),
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center my-6 font-semibold">
        Welcome to StarWars Wiki
      </h1>
      <p className="text-center">
        You can find some information about from Star Wars Universe
      </p>
      <div className="flex justify-center mt-10">
        <div className="container  w-3/4 max-w-md h-auto" ref={container}></div>
      </div>
      
    </div>
  );
}
