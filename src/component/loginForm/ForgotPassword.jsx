import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import apiClient from '../../utils/axios'; // Replace with your Axios instance

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false); // Manage loading spinner

  const onSubmit = async (data) => {
    setLoading(true); // Show spinner
    try {
      const response = await apiClient.post('/auth/forgot-password', data); // Replace with your API endpoint
      console.log('Password reset request successful:', response.data);

      // Show success toast
      toast.success('Password reset link sent to your email.', {
        position: "top-center",
        autoClose: 5000, // 5 seconds
      });
    } catch (error) {
      console.error('Password reset request failed:', error.response?.data || error.message);

      // Show error toast
      toast.error('Failed to send password reset link. Please try again.', {
        position: "top-center",
        autoClose: 5000, // 5 seconds
      });
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <ToastContainer /> {/* Toast container for notifications */}
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Forgot Password</h2>

      {loading && (
        <div className="flex justify-center items-center mb-4">
          <ClipLoader color="#4CAF50" size={40} /> {/* Loading spinner */}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            {...register('email')}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full bg-green-500 text-white py-3 px-6 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
