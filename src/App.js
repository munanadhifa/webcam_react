import "./input.css";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamToy = () => {
  const webcamRef = useRef(null);
  const [captureImage, setCaptureImage] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptureImage([...captureImage, imageSrc]);
    setImageCount(imageCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          className={`w-full h-auto  mt-4`}
          mirrored={true}
        />
      </div>
      <button
        onClick={capture}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 "
      >
        Capture
      </button>
      <div className="flex overflow-x-scroll w-[700px] ">
        {captureImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Captured ${index}`}
            className="mt-4 w-65 h-40 pr-2.5  mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default WebcamToy;
