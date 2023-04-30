import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/appointments', { patientName, date, time, reason }).then(response => {
            console.log(response.data);
            setPatientName('');
            setDate('');
            setTime('');
            setReason('');
        }).then((resp)=>{
            console.log(resp);
            alert("The data was added successfully.");
        }).catch((error)=>{
            console.log(error);
            alert("There was an error in the processing, check console logs for more details.");
        });
    };

    return (
        <div className='row mt-2'>
            <div className='col-1'></div>
            <div className='border rounded-3 appointment-form col-10 container p-3 px-4'>
                <h2>Book an Appointment</h2>
                <form onSubmit={handleSubmit} className='row'>
                    <div className="col-12 form-group">
                        <label> Patient Name: </label>
                        <input className="form-control" type="text" value={patientName} onChange={event => setPatientName(event.target.value)} />
                    </div>
                    <div className="col-6 form-group">
                        <label> Date: </label>
                        <input className="form-control" type="date" value={date} onChange={event => setDate(event.target.value)} />
                    </div>
                    <div className="col-6 form-group">
                        <label> Time: </label>
                        <input className="form-control" type="time" value={time} onChange={event => setTime(event.target.value)} />
                    </div>
                    <div className="col-12 form-group">
                        <label> Reason: </label>
                        <textarea className="form-control" value={reason} onChange={event => setReason(event.target.value)} rows={10}/>
                    </div>
                    <div className='col-5 form-group'>
                        <button className='my-2 btn btn-primary' type="submit">Book Appointment</button>
                    </div>
                </form>
            </div>
            <div className='col-1'></div>
        </div>
    );
};

export default AppointmentForm;
