import React, { useState } from 'react'
import ProgressBar from './loader';

const HomePage = () => {

    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(1);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Get the first file
        setFile(selectedFile);
      };

    const setLoading = () => {
        setIsLoading(2);
        setTimeout(() => setIsLoading(3), 5000);
    };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-10">Deepfake Detector</h1>

        {/* File Upload Section */}
        <div className="mb-6">
          <label htmlFor="file-upload" className="block text-xl font-semibold mb-2">Upload Video, Audio, or Image</label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
          />
        </div>

        {/* Video Preview Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">File Preview</h2>
          <div className="w-full h-64 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
            {file && file.type.startsWith('video') ? (
              <video className="w-full h-full" controls>
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            ) : file && file.type.startsWith('image') ? (
              <img className="w-full h-full object-contain" src={URL.createObjectURL(file)} alt="Preview" />
            ) : file && file.type.startsWith('audio') ? (
              <audio className="w-full" controls>
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the audio tag.
              </audio>
            ) : (
              <p className="text-center text-gray-400">Preview will appear here</p>
            )}
          </div>
        </div>

        {/* Detection Result Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Detection Result</h2>
          <div className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg flex flex-col justify-center items-center">
            {
              isLoading == 2 ? (<ProgressBar></ProgressBar>) : isLoading == 3 ? (<div className="text-center mt-4"><p className="text-xl font-bold">Trust Score: 85%</p><p className="text-sm text-green-500">Media is likely authentic</p></div>) : <p className="text-center text-gray-400">Result will be shown here after analysis</p>
            }
            
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button onClick={setLoading} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Start Detection
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
