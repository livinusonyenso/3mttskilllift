// src/components/ResourcesSettingsPanel.js

import React, { useState } from 'react';
import videoData from './dataTypes/videoData';
import ebookData from './dataTypes/ebookData';
import articleData from './dataTypes/articleData';
import podcastData from './dataTypes/podcastData';

const ResourcesSettingsPanel = () => {
  const [activeTab, setActiveTab] = useState('Video');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 500);
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
        placeholder="Search resources..."
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
          {/* Content Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {activeTab === 'Video' &&
              videoData.map((video) => (
                <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
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

            {activeTab === 'Ebook' &&
              ebookData.map((ebook, index) => (
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

            {activeTab === 'Articles' &&
              articleData.map((article, index) => (
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

            {activeTab === 'Podcasts' &&
              podcastData.map((podcast, index) => (
                <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{podcast.title}</h3>
                  <audio controls src={podcast.audioLink} className="w-full mt-2" />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesSettingsPanel;
