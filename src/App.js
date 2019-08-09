import React, { useState, Fragment } from 'react';
import { Header, NewAppointment, ListAppointments } from './components';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const addNewAppointment = data => setAppointments([...appointments, data]);

  const removeAppointment = id => {
    const dates = [...appointments];
    const appointments = dates.filter(date => date.id !== id);
    setAppointments(appointments);
  };

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
              // removeAppointment={this.removeAppointment}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// class App2 extends Component {
//   componentDidMount() {
//     const appointmentsLS = localStorage.getItem('appointments');
//     if (appointmentsLS) {
//       this.setState({
//         appointments: JSON.parse(appointmentsLS)
//       });
//     }
//   }

//   componentDidUpdate() {
//     localStorage.setItem(
//       'appointments',
//       JSON.stringify(this.state.appointments)
//     );
//   }

// }

export default App;
