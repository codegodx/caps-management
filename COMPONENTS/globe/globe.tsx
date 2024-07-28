"use client";
import React, { useState, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/LIB/utils";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 0.5,
      width: 800 * 0.5,
      height: 800 * 0.5,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.3,
      mapSamples: 50000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [-6.2, 106.816666], size: 0.03 },
        { location: [-3.316694, 114.590111], size: 0.02 },
        { location: [-3.316694, 120.590111], size: 0.02 },
      ],

      onRender: (state: any) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 py-10 w-full bg-black",
        className,
      )}
    >
      <div className="col-span-1 md:col-span-2 text-center">
        <h2 className="text-sm leading-[1rem] md:text-2xl md:leading-[1.5rem]">
          Segera Perluas Jaringan Bisnis <br /> Smartphone Service Care Anda
          dengan
        </h2>
        <h1 className="text-2xl md:text-7xl leading-[1] font-bold">
          Caps Management <br /> Software.
        </h1>
      </div>
      <div className="col-span-1 relative z-10  w-full h-full">
        <div className="w-full">
          <canvas
            ref={canvasRef}
            style={{
              width: 800,
              height: 800,
              maxWidth: "100%",
              aspectRatio: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
};
