import React, { Component } from 'react';
import { Header, NewAppointment, ListAppointments } from './components';

class App extends Component {
  state = { appointments: [] };

  componentDidMount() {
    const appointmentsLS = localStorage.getItem('appointments');
    if (appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'appointments',
      JSON.stringify(this.state.appointments)
    );
  }

  addNewAppointment = data =>
    this.setState({
      appointments: [...this.state.appointments, data]
    });

  removeAppointment = id => {
    const dates = [...this.state.appointments];
    const appointments = dates.filter(date => date.id !== id);
    this.setState({ appointments });
  };

  render() {
    return (
      <div className="container">
        <Header title="Pet Admin" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment addNewAppointment={this.addNewAppointment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListAppointments
              appointments={this.state.appointments}
              removeAppointment={this.removeAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
