import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg p-8 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        <div className="flex flex-col space-y-4">
          {/* Username Field */}
          <div className="flex items-center space-x-2 border px-3 py-2 rounded-lg bg-gray-100">
            <FaUser className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Username" 
              
              className="w-full bg-transparent outline-none" 
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center space-x-2 border px-3 py-2 rounded-lg bg-gray-100">
            <FaLock className="text-gray-500" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-transparent outline-none" 
            />
          </div>
          
          {/* Forgot Password */}
          <div className="text-right text-sm text-blue-500 cursor-pointer hover:underline">
            Forgot Password?
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
