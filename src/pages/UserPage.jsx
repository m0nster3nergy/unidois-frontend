import React from 'react';

const UserPage = () => {
  return (
    <div className="min-h-screen bg-black-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">John Doe</h2>
        <p className="text-center text-gray-600 mb-4">Web Developer</p>

        <div className="space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Email</span>
            <span className="text-gray-500">johndoe@example.com</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Location</span>
            <span className="text-gray-500">San Francisco, CA</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Website</span>
            <a href="https://johndoe.com" className="text-blue-500 hover:underline">johndoe.com</a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
