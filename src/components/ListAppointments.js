import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Appointment from './Appointment';

const ListAppointments = ({ appointments, removeAppointment }) => {
  const message = Object.keys(appointments).length
    ? 'Appointments Manager'
    : 'No Appointments';

  return (
    <Fragment>
      <h2 className="card-title-text-center">{message}</h2>
      <div className="lista-citas">
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            removeAppointment={removeAppointment}
          />
        ))}
      </div>
    </Fragment>
  );
};

ListAppointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  removeAppointment: PropTypes.func.isRequired
};

export default ListAppointments;
