import React from 'react';
import { PropTypes } from 'prop-types';

const Appointment = ({ appointment, removeAppointment }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{appointment.pet}</h3>
      <p className="card-text">
        <span>Owner's name: </span>
        {appointment.owner}
      </p>
      <p className="card-text">
        <span>date: </span>
        {appointment.date}
      </p>
      <p className="card-text">
        <span>Hour: </span>
        {appointment.hour}
      </p>
      <p className="card-text">
        <span>Symptoms: </span>
      </p>
      <p className="card-text">{appointment.symptoms}</p>

      <button
        className="btn btn-danger"
        onClick={() => removeAppointment(appointment.id)}
      >
        Delete &times;
      </button>
    </div>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppointment: PropTypes.func.isRequired
};

export default Appointment;
