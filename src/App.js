import React, { useState, Fragment } from 'react';
import { Header, NewAppointment, ListAppointments } from './components';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  return (
    <Fragment>
      <Header title="Pet Admin" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <NewAppointment
            // addNewAppointment={this.addNewAppointment}
            />
          </div>
          <div className="one-half column">
            {/* <ListAppointments
              appointments={this.state.appointments}
              removeAppointment={this.removeAppointment}
            /> */}
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

//   addNewAppointment = data =>
//     this.setState({
//       appointments: [...this.state.appointments, data]
//     });

//   removeAppointment = id => {
//     const dates = [...this.state.appointments];
//     const appointments = dates.filter(date => date.id !== id);
//     this.setState({ appointments });
//   };
// }

export default App;
