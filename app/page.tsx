"use client";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

import { FaTrashAlt, FaDownload } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";

import { saveAs } from "file-saver";

export default function Home() {
  const [file, setFile] = useState<File | null>();
  const [error, setError] = useState("");

  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [base64image, setBase64Image] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const response = await fetch("/api/replicate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64image }),
    });

    let result = await response.json();
    console.log(response);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setOutputImage(result.output);
    setLoading(false);
  };

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    // Check if any of the uploaded files are not valid
    if (rejectedFiles.length >0) {
      console.log(rejectedFiles);
      setError("Please upload a PNG or JPEG image less than 5MB.");
      return;
  };

  handleDelete();

  console.log(acceptedFiles);
  setError("");
  setFile(acceptedFiles[0]);

  // Convert the accepted file to a base64 string
  const reader = new FileReader();
  reader.readAsDataURL(acceptedFiles[0]);
  reader.onload = () => {
    const binaryStr = reader.result as string;
    setBase64Image(binaryStr);
  };
};

const handleDownload = () => {
  saveAs(outputImage as string, "output.png");
};

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

              <div className="flex items-center justify-center relative">

                {loading && (
                  <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                )}

                {outputImage && (
                  <><img
                      src={outputImage}
                      alt="Output Image"
                      className="object-cover w-full h-full rounded-lg border border-gray-800" /><button
                        className="absolute top-0 right-0 p-2 text-black bg-green-500"
                        onClick={() => handleDownload()}
                      >
                        <FaDownload className="w-4 h-4 hover:scale-125 duration-300" />
                      </button></>
                )}
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
            disabled={loading}
            className={`text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l rounded-lg px-6 py-2 text-center font-medium ${
              loading && "cursor-progress"
            }`}
            >
              Remove background
            </button>
          </div>
        )}
      </section>
    </div>
  </main>
);
}