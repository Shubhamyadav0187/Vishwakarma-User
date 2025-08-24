// Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "./gear-loader.json"; // यहां अपना JSON डालें

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Lottie animationData={animationData} loop={true} className="w-40 h-40" />
    </div>
  );
}
