import React from "react";
import { FileIcon, X } from "lucide-react";
import ProgressBar from "./progressBar";

function FileProgressItem({ file, onRemove }) {
  return (
    <div className="rounded-sm p-3 border border-[#DB2D384D]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <FileIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">{file.name}</p>
            <p className="text-xs text-gray-500 text-left">
              {(file.size / 1024 / 1024).toFixed(2)}MB
            </p>
          </div>
        </div>
        <button
          onClick={() => onRemove(file.id)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Remove file"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <ProgressBar progress={file.progress} status={file.status} />
    </div>
  );
}

export default FileProgressItem;
