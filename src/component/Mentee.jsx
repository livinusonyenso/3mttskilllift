import React from 'react';

function MenteeRegistrationForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Mentee Registration Form</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience Level</label>
            <select
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              required
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Areas of Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
            <input
              type="text"
              placeholder="e.g., Frontend, Backend, UI/UX"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              required
            />
          </div>

          {/* Preferred Communication Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Communication Method</label>
            <select
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              required
            >
              <option value="">Choose a method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Learning Goals</label>
            <textarea
              placeholder="Describe your learning goals and expectations"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 border-gray-300"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition duration-200"
            >
              Register as Mentee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenteeRegistrationForm;
