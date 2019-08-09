import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

const NewAppointment = () => {
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

      <form
      // onSubmit={this.handleSubmit}
      >
        <label>Pet name:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Pet name"
          name="pet"
          // onChange={this.handleChange}
          // value={this.state.appointment.pet}
        />
        <label>Owner name:</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Owner name"
          name="owner"
          // onChange={this.handleChange}
          // value={this.state.appointment.owner}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          // onChange={this.handleChange}
          // value={this.state.appointment.date}
        />

        <label>Hour</label>
        <input
          type="time"
          className="u-full-width"
          name="hour"
          // onChange={this.handleChange}
          // value={this.state.appointment.hour}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          placeholder="Symptoms"
          name="symptoms"
          // onChange={this.handleChange}
          // value={this.state.appointment.symptoms}
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

const initialState = {
  appointment: {
    id: undefined,
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  },
  error: false
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

//   handleSubmit = e => {
//     e.preventDefault();

//     for (const key in this.state.appointment) {
//       if (
//         this.state.appointment.hasOwnProperty(key) &&
//         this.state.appointment[key] === ''
//       ) {
//         this.setState({ error: true });
//         return;
//       }
//     }

//     this.setState(
//       {
//         appointment: {
//           ...this.state.appointment,
//           id: uuid()
//         }
//       },
//       () => {
//         this.props.addNewAppointment(this.state.appointment);
//         this.setState({ ...initialState });
//       }
//     );
//   };

//   render() {
//     const { error } = this.state;
//   }
// }

// NewAppointment.propTypes = {
//   addNewAppointment: PropTypes.func.isRequired
// };

export default NewAppointment;
