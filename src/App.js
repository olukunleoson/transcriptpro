import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentManagement from './components/StudentManagement';
import TranscriptGeneration from './components/TranscriptGeneration';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import Cookies from 'js-cookie';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if the authToken cookie exists and set isAuthenticated accordingly
    const token = Cookies.get('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (userData) => {
    // Logic to handle successful login and set the username
    setIsAuthenticated(true);
    setUsername(userData.username);

    // Store the authentication state in local storage
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsAuthenticated(false);
    setUsername('');

    // Clear the authentication state from local storage
    localStorage.removeItem('isAuthenticated');
  };

  // Clear the authentication state from local storage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('isAuthenticated');
    };
  }, []);

  return (
    <Router>
      <div className="page-container">
        <Navbar
          isAuthenticated={isAuthenticated}
          username={username}
          onLogout={handleLogout}
        />
        <div className="content-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className={isAuthenticated ? 'col-md-12' : 'col-md-12'}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />
                  <Route path="/register" element={<Register />} />
                  {isAuthenticated && (
                    <>
                      <Route path="/students" element={<StudentList />} />
                      <Route path="/students/:id" element={<StudentDetails />} />
                      <Route path="/manage" element={<StudentManagement />} />
                      <Route
                        path="/generate-transcript"
                        element={<TranscriptGeneration />}
                      />
                      <Route path="/add-student" element={<AddStudent />} />
                      <Route path="/students/:id/edit" element={<EditStudent />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                    </>
                  )}
                  {/* Add other routes here */}
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
