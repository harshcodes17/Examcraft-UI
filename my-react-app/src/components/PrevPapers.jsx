import { FaEye, FaDownload, FaFilter, FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFeather } from "react-icons/fa";

const PreviousPapers = () => {
  // Dummy data for previous papers
  const previousPapers = [
    {
      month: "March/2025",
      papers: [
        { id: 1, title: "12/02/2025 - English Paper for Standard 8th", time: "30mins", marks: 30 },
      ],
    },
    {
      month: "December/2024",
      papers: [
        { id: 2, title: "12/12/2024 - English Paper for Standard 6th", time: "60mins", marks: 40 },
        { id: 3, title: "05/12/2024 - Maths Paper for Standard 5th", time: "30mins", marks: 20 },
      ],
    },
    {
      month: "June/2024",
      papers: [
        { id: 4, title: "25/06/2024 - English Paper for Standard 8th", time: "30mins", marks: 40 },
      ],
    },
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
              <Link to="/questionbank" className="flex items-center px-4 py-3  hover:bg-gray-200 rounded-lg">
                <FaBook className="mr-2" /> Question Bank
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/previouspapers" className="flex items-center px-4 py-3 bg-indigo-500 text-white rounded-lg">
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
        <h1 className="text-xl font-bold mb-4">Previous Question Papers</h1>
        <button className="flex items-center text-gray-600 mb-4">
          <FaFilter className="mr-2" /> Filter
        </button>
        
        <div className="bg-white p-4 shadow rounded-md">
          {previousPapers.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{section.month}</h2>
              {section.papers.map((paper) => (
                <div key={paper.id} className="flex justify-between items-center p-3 mb-2 border rounded-md bg-indigo-50">
                  <div>
                    <h3 className="font-semibold text-indigo-800">{paper.title}</h3>
                    <p className="text-sm text-gray-600">Time - {paper.time}  Marks - {paper.marks}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="border px-4 py-2 rounded-lg flex items-center">
                      <FaEye className="mr-2" /> View
                    </button>
                    <button className="border px-4 py-2 rounded-lg flex items-center">
                      <FaDownload className="mr-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousPapers;
