import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppointmentCard from './AppointmentCard';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/appointments').then(response => {
            setAppointments(response.data);
        });
    }, []);

    return (
        // <div className='appointment-list'>
        //     <h2>Appointments</h2>
        //     <ul>
        //         {appointments.map(appointment => (
        //             <li key={appointment._id}>
        //                 {appointment.patientName} - {appointment.date.toLocaleString()} at {appointment.time} - {appointment.reason}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className='container p-4'>
            <div className='row'>
                <h4 className='col-12'>
                    Apointment List
                </h4>
            </div>
            <ul className="row row-cols-1 row-cols-md-12">
                {appointments.map((appointment) => {
                    let appointmentDetails = {
                        patient : appointment.patientName,
                        date: appointment.date.toLocaleString(),
                        time: appointment.time,
                        reason: appointment.reason
                    }
                    return (
                        <div className="col" key={appointment._id}>
                            <AppointmentCard appointment={appointmentDetails} />
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default AppointmentList;
