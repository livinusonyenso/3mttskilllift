// src/components/ResourcesSettingsPanel.js

import React, { useState, useEffect } from 'react';
import videoData from './dataTypes/videoData';
import ebookData from './dataTypes/ebookData';
import articleData from './dataTypes/articleData';
import podcastData from './dataTypes/podcastData';

const ResourcesSettingsPanel = () => {
  const [activeTab, setActiveTab] = useState('Video');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(videoData.length / itemsPerPage);

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 500);
  };

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Navigation Bar */}
      <div className="relative flex space-x-4 mb-6 border-b pb-4">
        {['Video', 'Ebook', 'Articles', 'Podcasts'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative text-lg font-semibold ${
              activeTab === tab ? 'text-green-600' : 'text-gray-600'
            } hover:text-green-500`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-500 transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 mb-4 w-full border border-gray-300 rounded-lg shadow-sm"
      />

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          {/* Display Content Based on Active Tab */}
          {activeTab === 'Video' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videoData.map((video, index) => (
                <div key={video.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                  {/* Video Thumbnail */}
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    <img src={video.image} alt={`${video.title} thumbnail`} className="w-full h-40 object-cover" />
                  </a>
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800">{video.title}</h3>
                    <p className="text-sm text-gray-600">Views: {video.views}</p>
                    <p className="text-sm text-gray-600">Rating: {video.rating}⭐</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Ebook' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ebookData.map((ebook, index) => (
                <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{ebook.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{ebook.description}</p>
                  <a
                    href={ebook.downloadLink}
                    className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg inline-block"
                    download
                  >
                    Download Ebook
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Articles' && (
            <div className="space-y-4">
              {articleData.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white shadow-lg rounded-lg hover:bg-green-50 transition"
                >
                  <h3 className="text-md font-semibold text-green-600">{article.title}</h3>
                  <p className="text-sm text-gray-700">Click to read this article on an external site.</p>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'Podcasts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {podcastData.map((podcast, index) => (
                <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{podcast.title}</h3>
                  <audio controls src={podcast.audioLink} className="w-full mt-2" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResourcesSettingsPanel;
