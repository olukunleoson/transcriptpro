import axios from 'axios';

export const fetchStudents = async () => {
  try {
    const response = await axios.get('/api/students/');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

// You can define other API functions here for different endpoints
