import { FaSearch, FaPlus, FaEye, FaDownload, FaFilter, FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFeather } from "react-icons/fa";

const QuestionBank = () => {
  // Dummy data for question banks
  const questionBanks = [
    { id: 1, title: "Question Bank - English - 2024-25", questions: 1002 },
    { id: 2, title: "Question Bank - English - 2023-24", questions: 504 },
    { id: 3, title: "Question Bank - Marathi - 2024-25", questions: 1088 },
    { id: 4, title: "Question Bank - Marathi - 2023-24", questions: 200 },
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
              <IoMdNotifications className="mr-2" /> Notifications
            </button>
            <Link to="/" className="flex items-center text-gray-600 hover:text-red-600">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Question Bank</h2>
        <div className="mt-4 bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between mb-4">
          <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow">
              <FaPlus className="mr-2" /> Create new Question Bank
            </button>
            <button className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow">
              <FaPlus className="mr-2" /> Create new Question
            </button>
            
          </div>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Title</th>
                <th className="border border-gray-200 p-2">Questions</th>
                <th className="border border-gray-200 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questionBanks.map((bank) => (
                <tr key={bank.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{bank.title}</td>
                  <td className="border border-gray-200 p-2">{bank.questions}</td>
                  <td className="border border-gray-200 p-2 flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center">
                      <FaEye className="mr-1" /> View
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center">
                      <FaDownload className="mr-1" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default QuestionBank;
