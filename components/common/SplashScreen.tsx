"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

// Custom Loader using styled-components
const Loader = () => {
  return (
    <StyledWrapper>
      <div className="div">
        <p id="h2">
          Loading....
          <span id="lol" />
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #h2 {
    color: white;
    mix-blend-mode: difference; /* changes the color of the loading text */
    text-align: center;
    margin: 0;
    font-size: 12px;
    line-height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 0 0 3px;
    padding: 0;
    letter-spacing: 5px;
  }

  .div {
    position: relative;
    top: 0;
    left: 0%;
    padding: 5px 10px;
    max-width: 200px; /* Responsive width */
    width: 100%;
    height: 30px;
    background: linear-gradient(to right, white, black);
    background-size: 200% 100%;
    animation-delay: 2s;
    border-radius: 10px;
    box-shadow: 0 0 3px;
    -webkit-box-reflect: below 1px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    animation: gradientAnimation 3s linear infinite reverse;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .div {
      width: 500px;
      left: 10%;
    }
  }
`;

// Main SplashScreen Component
export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If the document is already loaded, disable the splash screen immediately
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => setIsLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // While loading, display the splash screen with heading, subheading, and our custom Loader
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[50000000] flex flex-col items-center justify-center bg-black">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white animate-fadeIn">
            Agentia
          </h1>
          <p className="text-lg text-white mt-2 animate-fadeIn capitalize">
            Where AI agents, Learn, think and evolve together
          </p>
        </div>

        {/* Use the provided styled-components Loader */}
        <Loader />

        {/* Inline CSS for fadeIn animation */}
        <style jsx>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }
}
