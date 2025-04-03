import { FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h1 className="text-indigo-600 text-xl font-bold flex items-center mb-6">
          📖 ExamCraft
        </h1>
        <div className="text-gray-800 font-semibold mb-4">Welcome, Vishal Desai</div>
        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center px-4 py-3 bg-indigo-500 text-white rounded-lg">
                <MdDashboard className="mr-2" /> Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaBook className="mr-2" /> Question Bank
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaFileAlt className="mr-2" /> Previous Papers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200 rounded-lg">
                <FaQuestionCircle className="mr-2" /> Help
              </a>
            </li>
          </ul>
        </nav>
        {/* Profile & Logout */}
        <div className="mt-auto">
          <div className="flex items-center mb-3">
            <div className="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
              VD
            </div>
            <span className="ml-3 text-gray-800">Vishal Desai</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-600 hover:text-indigo-600">
              <IoMdNotifications className="mr-2" /> Notifications
            </button>
            <button className="flex items-center text-gray-600 hover:text-red-600">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Create Question Paper</h2>

        <div className="bg-white shadow-lg p-6 mt-4 rounded-lg">
          {/* Paper Details */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="e.g. Mathematics Exam Paper" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="e.g. 10th Standard" className="border p-3 rounded-md w-full" />
            <input type="number" placeholder="e.g. 50" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="e.g. Mathematics" className="border p-3 rounded-md w-full" />
          </div>

          {/* Chapter Selection */}
          <h3 className="mt-6 font-semibold">Select Chapters/Topics:</h3>
          <div className="grid grid-cols-3 gap-4 text-sm mt-2">
            <label><input type="checkbox" className="mr-2" /> Chapter 1: Real Numbers</label>
            <label><input type="checkbox" className="mr-2" /> Chapter 2: Polynomials</label>
            <label><input type="checkbox" className="mr-2" /> Chapter 3: Linear Equations</label>
            <label><input type="checkbox" className="mr-2" /> Chapter 4: Quadratic Equations</label>
            <label><input type="checkbox" className="mr-2" /> Chapter 5: Arithmetic Progressions</label>
            <label><input type="checkbox" className="mr-2" /> Chapter 6: Coordinate Geometry</label>
          </div>

          {/* Question Type Selection */}
          <h3 className="mt-6 font-semibold">Select Type of Questions:</h3>
          <div className="grid grid-cols-3 gap-4 text-sm mt-2">
            <label><input type="checkbox" className="mr-2" /> Multiple Choice Questions</label>
            <label><input type="checkbox" className="mr-2" /> Prove the following equation</label>
            <label><input type="checkbox" className="mr-2" /> Solve the following</label>
            <label><input type="checkbox" className="mr-2" /> True or False</label>
            <label><input type="checkbox" className="mr-2" /> Word Problems</label>
          </div>

          {/* Time & Question Bank */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <input type="text" placeholder="Total Time (mins)" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="Question Bank Name" className="border p-3 rounded-md w-full" />
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6">
            <button className="bg-gray-200 px-4 py-2 rounded-lg mr-2">Summarize</button>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Generate Paper</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
