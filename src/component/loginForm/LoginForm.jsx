import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiClient from '../../utils/axios';
import useAuth from "../../hooks/useAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const ResponsiveLoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await apiClient.post('/auth/login', data);
      toast.success('Login successful!', {
        position: "top-center",
        autoClose: 3000,
      });
      login(response.data.token);
      navigate('/dashboardmain');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to login. Please check your credentials.';
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Email Field */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            {...register('email')}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
        </div>

        {/* Password Field */}
        <div className="relative">
          <label className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
          
          {/* Toggle Password Visibility Icon, Center-Aligned */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-600 mt-7"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-500 text-white py-3 px-6 rounded-md ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
            } focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center`}
          >
            {loading && (
              <span className="loader mr-2 w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            )}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResponsiveLoginForm;
