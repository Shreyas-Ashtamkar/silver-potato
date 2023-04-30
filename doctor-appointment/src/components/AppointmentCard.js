import React from 'react';

function AppointmentCard(props) {
    const { patient, date, time, reason } = props.appointment;
    return (
        <div className="card m-1">
            <div className="card-body">
                <h5 className="card-title">{patient}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{date} at {time}</h6>
                <p className="card-text">{reason}</p>
            </div>
        </div>
    );
}

export default AppointmentCard;
