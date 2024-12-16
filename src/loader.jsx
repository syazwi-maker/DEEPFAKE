import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(1); // Initial progress set to 1%

  useEffect(() => {
    if (progress < 100) {
      // Increment progress by 1 every 50ms (adjust as needed)
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 50);

      // Clear interval when progress reaches 100
      if (progress === 100) {
        clearInterval(interval);
      }

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [progress]);

  return (
    <div className="w-[350px] max-w-md mx-auto mt-10">
      {/* Progress Bar */}
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-sm font-semibold">Detecting deepfake...</span>
          <span className="text-sm font-semibold">{progress}%</span>
        </div>
        <div className="flex mb-2">
          <div className="relative flex-1 flex h-2 mb-4">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
