import { useState } from "react";
import { FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFeather } from "react-icons/fa";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How to upload a document?", answer: "Go to the uploads section and click on the upload button to add your document." },
    { question: "How to reset my password?", answer: "Navigate to account settings, select reset password, and follow the instructions." },
    { question: "How to create a question bank?", answer: "Click on the question bank section, add your questions, and save them." },
    { question: "How to delete a test?", answer: "Go to the test list, select the test you want to delete, and click on delete." },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h1 className="text-indigo-600 text-xl font-bold flex items-center mb-6">
          <FaFeather className="text-indigo-600 text-xl mr-2" />
           ExamCraft</h1>
        <div className="text-gray-800 font-semibold mb-4">Welcome, Vishal Desai</div>
        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <Link to="/home" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaBook className="mr-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/questionbank" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaBook className="mr-2" /> Question Bank
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/previouspapers" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaFileAlt className="mr-2" /> Previous Papers
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/help" className="flex items-center px-4 py-3 bg-indigo-500 text-white rounded-lg">
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
              <IoMdNotifications className="mr-2" /> Notifications
            </button>
            <Link to="/" className="flex items-center text-gray-600 hover:text-red-600">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="p-8 flex-1">
        <h1 className="text-xl font-bold mb-4">Help & FAQs</h1>

        <div className="bg-white p-4 shadow rounded-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-indigo-800 py-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;