import React, { useState, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

const NewAppointment = ({ addNewAppointment }) => {
  const initialAppointment = {
    id: undefined,
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  };

  const [appointment, setAppointment] = useState(initialAppointment);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    for (const key in appointment) {
      if (appointment.hasOwnProperty(key) && appointment[key] === '') {
        setError(true);
        return;
      }
    }

    // TODO: not adding uuid
    setAppointment({ ...appointment, id: uuid() });
    addNewAppointment(appointment);
    setAppointment(initialAppointment);
    setError(true);
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <div className="notification error">All fields are required</div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Pet name:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Pet name"
          name="pet"
          onChange={handleChange}
          value={appointment.pet}
        />
        <label>Owner name:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Owner name"
          name="owner"
          onChange={handleChange}
          value={appointment.owner}
        />
        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={handleChange}
          value={appointment.date}
        />
        <label>Hour</label>
        <input
          type="time"
          className="u-full-width"
          name="hour"
          onChange={handleChange}
          value={appointment.hour}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          placeholder="Symptoms"
          name="symptoms"
          onChange={handleChange}
          value={appointment.symptoms}
        />
        <button type="submit" className="button-primary u-full-width">
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

NewAppointment.propTypes = {
  addNewAppointment: PropTypes.func.isRequired
};

export default NewAppointment;
