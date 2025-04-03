import { FaHome, FaBars, FaSave, FaDownload } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMove } from "react-icons/fi";

const EditQuestionPaper = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-white shadow-lg flex flex-col items-center py-5 space-y-6">
        <FaHome className="text-gray-600 text-xl cursor-pointer" />
        <FaBars className="text-gray-600 text-xl cursor-pointer" />
        <span className="h-10 w-10 bg-yellow-500 text-white flex items-center justify-center rounded-full font-bold">
          VD
        </span>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Edit Question Paper</h2>

        {/* Total Marks */}
        <div className="flex justify-end text-indigo-600 font-semibold">
          Total Marks: <span className="ml-2 bg-indigo-100 px-2 py-1 rounded">6/50</span>
        </div>

        {/* Question Sections */}
        <div className="bg-white shadow-lg p-6 mt-4 rounded-lg">
          {/* Multiple Choice Questions */}
          <div className="border-b pb-4">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="font-semibold">Multiple Choice Questions</h3>
              <IoIosArrowUp className="text-lg" />
            </div>

            {/* Question List */}
            <div className="mt-4 space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Q1.</span>
                  <FiMove className="text-gray-500 cursor-pointer" />
                </div>
                <p>If two triangles are similar, their corresponding sides are:</p>
                <p className="mt-2">a) Equal &nbsp;&nbsp; b) Proportional &nbsp;&nbsp; c) Perpendicular &nbsp;&nbsp; d) None</p>
                <p className="mt-2 text-sm text-gray-600">Marks: 2</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Q2.</span>
                  <FiMove className="text-gray-500 cursor-pointer" />
                </div>
                <p>In △ABC, DE is parallel to BC. If AD = 3 cm, DB = 6 cm, find the ratio of AT to EC.</p>
                <p className="mt-2">a) 1:3 &nbsp;&nbsp; b) 1:2 &nbsp;&nbsp; c) 2:3 &nbsp;&nbsp; d) 3:4</p>
                <p className="mt-2 text-sm text-gray-600">Marks: 2</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">Q3.</span>
                  <FiMove className="text-gray-500 cursor-pointer" />
                </div>
                <p>The value of k for which (3, k), (6, 10), (9, 14) are collinear:</p>
                <p className="mt-2">a) 8 &nbsp;&nbsp; b) 7 &nbsp;&nbsp; c) 6 &nbsp;&nbsp; d) 5</p>
                <p className="mt-2 text-sm text-gray-600">Marks: 2</p>
              </div>
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className="mt-4 border-b pb-4">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="font-semibold">Solve the Following Equations</h3>
              <IoIosArrowDown className="text-lg" />
            </div>
          </div>

          <div className="mt-4 border-b pb-4">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="font-semibold">True or False</h3>
              <IoIosArrowDown className="text-lg" />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between cursor-pointer">
              <h3 className="font-semibold">Word Problems</h3>
              <IoIosArrowDown className="text-lg" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button className="border px-4 py-2 rounded-lg">Preview</button>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center">
              <FaSave className="mr-2" /> Save
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-lg flex items-center">
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditQuestionPaper;
