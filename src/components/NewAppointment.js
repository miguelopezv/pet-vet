import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

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

class NewAppointment extends Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    for (const key in this.state.appointment) {
      if (
        this.state.appointment.hasOwnProperty(key) &&
        this.state.appointment[key] === ''
      ) {
        this.setState({ error: true });
        return;
      }
    }

    this.setState(
      {
        appointment: {
          ...this.state.appointment,
          id: uuid()
        }
      },
      () => {
        this.props.addNewAppointment(this.state.appointment);
        this.setState({ ...initialState });
      }
    );
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Fill the form</h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              All fields are required
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet name:
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet name"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Owner name:
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Owner name"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Symptoms"
                  name="symptoms"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptoms}
                />
                <button
                  type="submit"
                  className="btn btn-success btn-block py-3 mt-2"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

NewAppointment.propTypes = {
  addNewAppointment: PropTypes.func.isRequired
};

export default NewAppointment;
