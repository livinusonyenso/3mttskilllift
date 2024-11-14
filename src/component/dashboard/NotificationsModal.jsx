// NotificationsModalDrawerWhiteGreen.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const NotificationsModalDrawerWhiteGreen = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="relative w-80 max-w-md p-6 bg-white text-gray-800 rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-green-600">Notifications</h2>
          <FaTimes className="cursor-pointer text-gray-400 hover:text-green-600" onClick={onClose} />
        </div>
        <div className="mt-4 space-y-4">
          {notifications.length ? (
            notifications.map((notification, index) => (
              <div key={index} className="p-3 rounded bg-gray-100 border-l-4 border-green-600">
                {notification}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsModalDrawerWhiteGreen;
