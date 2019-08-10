import React from 'react';
import { PropTypes } from 'prop-types';

const Appointment = ({ appointment, removeAppointment }) => (
  <div className="cita">
    <h3>{appointment.pet}</h3>
    <p>
      <span>Owner's name: </span>
      {appointment.owner}
    </p>
    <p>
      <span>date: </span>
      {appointment.date}
    </p>
    <p>
      <span>Hour: </span>
      {appointment.hour}
    </p>
    <p>
      <span>Symptoms: </span>
      {appointment.symptoms}
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => removeAppointment(appointment.id)}
    >
      Delete &times;
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppointment: PropTypes.func.isRequired
};

export default Appointment;
