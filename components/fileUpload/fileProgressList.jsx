import React from "react";
import FileProgressItem from "./fileProgressItem";

function FileProgressList({ files, onRemove }) {
  if (files.length === 0) return null;

  return (
    <div className="space-y-3">
      {files.map((file) => (
        <FileProgressItem key={file.id} file={file} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default FileProgressList;
