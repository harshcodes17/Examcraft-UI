import { FaFeather } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center">
      <FaFeather className="text-indigo-600 text-xl mr-2" />
      <h1 className="text-lg font-semibold">ExamCraft</h1>
    </nav>
  );
};

export default Navbar;
