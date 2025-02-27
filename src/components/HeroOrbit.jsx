import React from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration = 1, // Default spin duration in seconds
  orbitDuration = 10, // Default orbit duration in seconds
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(
          "flex items-center justify-center", // Add default classes
          shouldOrbit && "animate-spin" // Conditionally add animation
        )}
        style={{
          animationDuration: shouldOrbit ? `${orbitDuration}s` : undefined,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin && "animate-spin")}
            style={{
              animationDuration: shouldSpin ? `${spinDuration}s` : undefined,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
