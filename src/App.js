import "./input.css";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamToy = () => {
  const webcamRef = useRef(null);
  const [captureImage, setCaptureImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptureImage(imageSrc);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          className={`w-full h-auto rounded-md mt-4`}
          mirrored={true}
        />
        <button
          onClick={capture}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 "
        >
          Capture
        </button>
        <div>
          {captureImage && (
            <img
              src={captureImage}
              alt="capture"
              className="mt-4 w-65 h-40 rounded-md mb-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamToy;
