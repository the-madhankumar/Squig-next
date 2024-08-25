// "use client";
import React from "react";
import Image from "next/image";
// import { FlipWords } from "../ui/flip-words";

// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim";
// import { Button } from "../ui/button";

export function Hero() {

  // const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
  //   useEffect(() => {
  //       initParticlesEngine(async (engine) => {
  //           // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //           // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //           // starting from v2 you can add only the features you need reducing the bundle size
  //           //await loadAll(engine);
  //           //await loadFull(engine);
  //           await loadSlim(engine);
  //           //await loadBasic(engine);
  //       }).then(() => {
  //           setInit(true);
  //       });
  //   }, []);

  //   const particlesLoaded = (container : any) => {
  //     console.log(container);
  // };
  // const words = [
  //   "simplicity",
  //   "efficiency",
  //   "versatility",
  //   "innovation",
  // ];

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex justify-center items-center">
        <Image 
          src="/squig.png"
          alt="Squig"
          width={450}
          height={450}
          draggable={false}
          className="object-contain z-10"
        />
      </div>
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div>
        <h2 className={`text-white inline  text-8xl font-extrabold `}>
              SQUIG
        </h2>
        <sub className="text-[0.5em] text-gray-500">Alpha</sub>
        </div>
      
        {/* Explore a new<br/> way for
        <FlipWords words={words} /> <br /> */}
      {/* <div className="flex gap-10">
        <Button>Download</Button>
        <Button>Learn</Button>
      </div> */}
      </div>
    </div>
  );
}
