import { useState } from "react";
import { FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaUpload, FaCamera, FaPlus, FaLightbulb, FaFeather, FaUserCircle, FaBell, FaEdit, FaBackward, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateNewQuestion = () => {
  const [showGuide, setShowGuide] = useState(false); // State for modal

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h1 className="text-indigo-600 text-xl font-bold flex items-center mb-6">
          <FaFeather className="mr-2" /> ExamCraft
        </h1>
        <div className="text-gray-800 font-semibold mb-4 flex items-center">
          <FaUserCircle className="mr-2 text-lg" /> Vishal Desai
        </div>

        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <Link to="/home" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaBook className="mr-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/questionbank" className="flex items-center px-4 py-3 bg-indigo-500 text-white rounded-lg">
                <FaBook className="mr-2" /> Question Bank
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/previouspapers" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaFileAlt className="mr-2" /> Previous Papers
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/help" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaQuestionCircle className="mr-2" /> Help
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile & Logout */}
        <div className="mt-auto">
          <div className="flex items-center mb-3">
            <div className="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">VD</div>
            <span className="ml-3 text-gray-800">Vishal Desai</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-600 hover:text-indigo-600">
              <FaBell className="mr-2" /> Notifications
            </button>
            <Link to="/" className="flex items-center text-gray-600 hover:text-red-600">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-8 flex-1">
        <h1 className="text-xl font-bold mb-4">Create New Question</h1>

        {/* Question Input Methods */}
        <div className="bg-white p-6 shadow rounded-md flex justify-between">
          {/* Upload Document */}
          <div className="text-center p-4 border rounded-lg shadow hover:shadow-md transition">
            <FaUpload className="text-blue-500 text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold">Upload Document</h3>
            <p className="text-sm text-gray-600">Upload Excel, PDF files containing questions</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg">Select File</button>
          </div>

          {/* Scan Document */}
          <div className="text-center p-4 border rounded-lg shadow hover:shadow-md transition">
            <FaCamera className="text-green-500 text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold">Scan Document</h3>
            <p className="text-sm text-gray-600">Scan physical documents with camera</p>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">Open Camera</button>
          </div>

          {/* Manual Entry */}
          <div className="text-center p-4 border rounded-lg shadow hover:shadow-md transition">
            <FaPlus className="text-purple-500 text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold">Manual Entry</h3>
            <p className="text-sm text-gray-600">Manually create and enter questions</p>
            <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg">Create New</button>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
          <div className="flex items-center">
            <FaLightbulb className="text-blue-400 text-2xl mr-3" />
            <div>
              <p className="font-semibold">Pro Tip</p>
              <p className="text-sm text-gray-600">
                For best results when scanning physical documents, ensure good lighting and hold the camera steady.
                Multiple questions per page are automatically separated.
              </p>
              <button 
                className="mt-2 text-blue-600 underline"
                onClick={() => setShowGuide(true)}
              >
                View Scanning Guide
              </button>
            </div>
          </div>
        </div>

        {/* Modal Popup for Scanning Guide */}
        {showGuide && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Scanning Guide</h2>
                <button onClick={() => setShowGuide(false)}>
                  <FaTimes className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                <li><strong>Ensure Good Lighting:</strong> Avoid shadows and glare.</li>
                <li><strong>Hold the Camera Steady:</strong> Keep hands stable or use a stand.</li>
                <li><strong>Use a Flat Surface:</strong> Place documents on a flat surface.</li>
                <li><strong>Check Alignment:</strong> Ensure the entire document is visible.</li>
                <li><strong>Use High Resolution:</strong> Scan at least 300 DPI for clarity.</li>
                <li><strong>Separate Questions Clearly:</strong> Space out multiple questions on a page.</li>
                <li><strong>Review Before Saving:</strong> Check for clarity before uploading.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Back to Question Banks */}
        <Link to="/questionbank" className="mt-6 block bg-white p-4 shadow rounded-md hover:bg-gray-50 flex items-center">
          <FaBackward className="mr-2 text-lg text-gray-700" />
          <h2 className="font-semibold text-lg">Back to Question Banks</h2>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewQuestion;
