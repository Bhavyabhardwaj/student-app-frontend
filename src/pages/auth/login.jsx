import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import toast from 'react-hot-toast';
import Layout from '../../layout/layout';


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setErrorMsg("Please fill in all fields.");
      toast.error("Missing values from the form");
      return;
    }
   

    if (!loginData.email.includes('@') || !loginData.email.includes('.')) {
      setErrorMsg("Invalid email address");
      toast.error("Invalid email address");
      return;
    }

    const apiResponse = await dispatch(login(loginData));
    console.log("API Response", apiResponse);

    if (apiResponse?.payload?.data?.success) {
      navigate('/dashboard');
    } else {
      setErrorMsg("Login failed. Please try again.");
    }
  }

  return (
    //<Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login</h2>

        {errorMsg && (
          <div className="mb-4 text-sm text-center text-red-600 font-medium">{errorMsg}</div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={loginData.email}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={loginData.password}
              onChange={handleUserInput}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
   // </Layout>
  );
}
