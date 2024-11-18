import axios from './axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://threemttskilllift-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Example: Add an auth token if needed
    const token = localStorage.getItem('authToken'); // Replace with your token storage logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error('Unauthorized! Redirecting to login.');
    } else if (error.response && error.response.status === 500) {
      console.error('Server error. Please try again later.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
