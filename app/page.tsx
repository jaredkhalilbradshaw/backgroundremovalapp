"use client";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

import { FaTrashAlt } from "react-icons/fa";

export default function Home() {
  const [file, setFile] = useState<File | null>();
  const [error, setError] = useState("");

  const [outputImage, setOutputImage] = useState<string | null>(null);

  const acceptedFileTypes = {
    "image/jpeg": [".jpeg", ".jpg"],
    "image/png": [".png"],
  };

  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const fileSize = (size: number) => {
    if (size === 0) return "0 bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDelete = () => {
    setFile(null);
    setOutputImage(null);
  };

  const handleSubmit = async () => {
    // This processes the input image and gets the output image with the background removed

    setOutputImage("https://via.placeholder.com/400x300?text=Output+Image");
  };

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    // Check if any of the uploaded files are not valid
    if (rejectedFiles.length >0) {
      console.log(rejectedFiles);
      setError("Please upload a PNG or JPEG image less than 5MB.");
      return;
  };

  console.log(acceptedFiles);
  setError("");
  setFile(acceptedFiles[0]);
}

  return (
  /* This wrapper makes the background black and the full height of the screen */
  <main className="min-h-screen bg-black text-white">
    
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text">
          Remove background
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-lg mx-auto mb-12">
        
        {/* Images Preview Section */}
        <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
          {file && (
            <>
              <div className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="object-cover w-full h-full rounded-lg border border-gray-800"
                />

                <button
                  className="absolute top-0 right-0 p-2 text-black bg-yellow-500"
                  onClick={() => handleDelete()}
                >
                  <FaTrashAlt className="w-4 h-4 hover:scale-125 duration-300" />
                </button>


                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/50 text-white text-xs p-2 rounded-b-lg truncate">
                  {file.name} ({fileSize(file.size)})
                </div>
              </div>
              <div className="flex items-center justify-center border-2 border-gray-800 rounded-lg bg-gray-900 text-gray-500">
                Output image here
              </div>
            </>
          )}
        </div>

        {/* Dropzone Area */}
        <div className="w-full text-center border-4 border-gray-700 border-dashed rounded-md cursor-pointer mb-2 text-gray-400 hover:border-blue-500 transition-colors">
          <Dropzone
            accept={acceptedFileTypes}
            multiple={false}
            maxSize={maxFileSize}
            onDrop={onDrop}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="p-10">
                <input {...getInputProps()} />
                <p>Drag and drop some files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
        </div>

        {error && (
          <div className="flex justify-center">
            <p className="text-md text-yellow-500">{error}</p>
          </div>
        )}

        {/* Submit button */}
        {file && (
          <div className="flex items-center justify-center mt-4">
            <button 
            onClick={handleSubmit}
            className="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l rounded-lg px-6 py-2 text-center font-medium">
              Remove background
            </button>
          </div>
        )}
      </section>
    </div>
  </main>
);
}