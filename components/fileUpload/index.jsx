import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FileProgressList from "./fileProgressList";

import styles from "./fileupload.module.scss";

// Images
import Image from "next/image";
import uploadImage from "@/public/Images/icons/upload.png";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileAdd = (error, file) => {
    if (error) return;

    const newFile = {
      id: file.id,
      name: file.filename,
      size: file.fileSize,
      progress: 0,
      status: "loading",
    };

    setFiles((prev) => [...prev, newFile]);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? {
                ...f,
                progress,
                status: progress === 100 ? "completed" : "loading",
              }
            : f
        )
      );

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  const handleFileRemove = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  return (
    <div className={`${styles.fileuploadContainer} fileuploadContainer`}>
      <div className={`${styles.dropBox}`}>
        <div className={styles.dropContent}>
          <Image className="mx-auto" src={uploadImage} alt="upload image" />
          <p className="mt-2">
            Drag your resume or <span>click here</span> to upload
          </p>
        </div>
        <FilePond
          allowMultiple={true}
          maxFiles={5}
          acceptedFileTypes={["application/pdf", "image/jpeg", "image/png"]}
          maxFileSize="12MB"
          onaddfile={handleFileAdd}
          onremovefile={(error, file) => handleFileRemove(file.id)}
          className="absolute inset-0 w-full h-full opacity-0"
          credits={false}
        />
      </div>

      <p className={styles.supportFormat}>
        Supported formats are JPEG, PNG, PDF formats upto 12MB
      </p>

      <div className="mt-6">
        <FileProgressList files={files} onRemove={handleFileRemove} />
      </div>
    </div>
  );
}

export default FileUpload;
