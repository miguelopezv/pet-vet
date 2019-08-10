import React, { useState, useEffect, Fragment } from 'react';
import { Header, NewAppointment, ListAppointments } from './components';

const App = () => {
  let appointmentsLS = JSON.parse(localStorage.getItem('appointments'));

  if (!appointmentsLS) {
    appointmentsLS = [];
  }
  const [appointments, setAppointments] = useState(appointmentsLS);
  const addNewAppointment = data => setAppointments([...appointments, data]);

  const removeAppointment = id => {
    const dates = appointments.filter(date => date.id !== id);
    setAppointments(dates);
  };

  useEffect(() => {
    // TODO: Refactor
    const appointmentsLS = JSON.parse(localStorage.getItem('appointments'));
    if (appointmentsLS) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  return (
    <Fragment>
      <Header title="Pet Admin" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <NewAppointment addNewAppointment={addNewAppointment} />
          </div>
          <div className="one-half column">
            <ListAppointments
              appointments={appointments}
              removeAppointment={removeAppointment}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
