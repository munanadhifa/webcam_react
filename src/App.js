import "./input.css";

import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamToy = () => {
  const webcamRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <Webcam audio={false} ref={webcamRef} className={`w-full h-auto `} />
      </div>
    </div>
  );
};

export default WebcamToy;
