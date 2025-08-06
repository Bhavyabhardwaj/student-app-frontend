import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../api/axios'; 
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/slices/authSlice";
import Layout from '../../layout/layout';

export default function Signup() {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signUpState, setSignUpState] = useState({
        firstName: '',
        email: '',
        mobileNumber: '',
        password: ''
    });

    function handleUserInput(e) {
       const {name, value} = e.target;
       setSignUpState({
        ...signUpState,
        [name]: value
       })
    }

    async function handleFormSubmit(e) {
        e.preventDefault(); // prevent the form from reloading the page
        console.log(signUpState);

        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName) {
            toast.error("Missing values from the form")
            return;
        }

        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20) {
            toast.error("First name should be atleast 5 characters long and maximum 20 characters long")
            return;
        }

        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

  
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12) {
            toast.error("Mobile number should be between 10-12 characters")
            return;
        }

        const apiReponse = await dispatch(createAccount(signUpState));
        console.log("Api response", apiReponse);
        if(apiReponse.payload.data.success) {
            navigate('/goal');
        }
    };

  return (
    //<Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex items-center justify-center px-4 py-auto">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Signup</h2>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.firstName}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.lastName}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.email}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.mobileNumber}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.password}
              onChange={handleUserInput}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-md"
              value={signUpState.confirmPassword}
              onChange={handleUserInput}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Signup
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
    //</Layout>
  );
}
