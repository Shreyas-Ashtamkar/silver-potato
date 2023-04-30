import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from './components/Navbar';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';
// import EditAppointment from './components/EditAppointment';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
            <Routes>
              <Route path="/" element={<AppointmentList/>} />
              <Route path="/create" element={<AppointmentForm/>} />
              {/* <Route path="/edit/:id" component={EditAppointment} /> */}
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
