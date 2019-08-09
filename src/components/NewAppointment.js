import React, { useState, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

const NewAppointment = ({ addNewAppointment }) => {
  const initialAppointment = {
    id: '',
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  };

  const [appointment, setAppointment] = useState(initialAppointment);

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // for (const key in appointment) {
    //   if (appointment.hasOwnProperty(key) && appointment[key] === '') {
    //     this.setState({ error: true });
    //     return;
    //   }
    // }

    setAppointment({ ...appointment, id: uuid() });
    addNewAppointment(appointment);
    setAppointment(initialAppointment);
    // this.setState({ ...initialState });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {/* <div className="card mt-5 py-5">
         <div className="card-body">
           <h2 className="card-title text-center mb-5">Fill the form</h2>

          {error ? (
             <div className="alert alert-danger mt-2 mb-5 text-center">
               All fields are required
             </div>
           ) : null} */}

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
    //   </div>
    // </div>
  );
};

// class NewAppointment extends Component {
//   state = { ...initialState };

//   handleChange = e => {
//     this.setState({
//       appointment: {
//         ...this.state.appointment,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   render() {
//     const { error } = this.state;
//   }
// }

// NewAppointment.propTypes = {
//   addNewAppointment: PropTypes.func.isRequired
// };

export default NewAppointment;
