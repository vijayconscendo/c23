import React from "react";

function ProgressBar({ progress, status }) {
  const getProgressColor = () => {
    switch (status) {
      case "completed":
        return "bg-blue-600";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="w-full flex items-center">
      <div className="w-full bg-gray-200 rounded-full h-[12px] flex">
        <div
          className={`h-[12px] rounded-full transition-all duration-300 ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-end ml-2">
        <span className="text-xs text-gray-500">{progress}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
