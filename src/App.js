import React from 'react';
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
import TranscriptUpload from './components/TranscriptUpload';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="page-container">
      <Navbar />
      <div className="content-wrap">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/manage" element={<StudentManagement />} />
        <Route path="/generate-transcript" element={<TranscriptGeneration />} />
        <Route path="/upload-transcript" element={<TranscriptUpload />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students/:id/edit" element={<EditStudent />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
