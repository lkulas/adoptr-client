import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Checkbox from './checkbox';
import {required, nonEmpty, email} from '../validators';
import {connect} from 'react-redux';
import './profile-form.css';

export class ProfileForm extends React.Component {
  onSubmit(values) {
      return fetch('/api/messages', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then(res => {
              if (!res.ok) {
                  if (
                      res.headers.has('content-type') &&
                      res.headers
                          .get('content-type')
                          .startsWith('application/json')
                  ) {
                      // It's a nice JSON error returned by us, so decode it
                      return res.json().then(err => Promise.reject(err));
                  }
                  // It's a less informative error returned by express
                  return Promise.reject({
                      code: res.status,
                      message: res.statusText
                  });
              }
              return;
          })
          .then(() => console.log('Submitted with values', values))
          .catch(err => {
              const {reason, message, location} = err;
              if (reason === 'ValidationError') {
                  // Convert ValidationErrors into SubmissionErrors for Redux Form
                  return Promise.reject(
                      new SubmissionError({
                          [location]: message
                      })
                  );
              }
              return Promise.reject(
                  new SubmissionError({
                      _error: 'Error submitting message'
                  })
              );
          });
  }

  render() {
      let successMessage;
      if (this.props.submitSucceeded) {
          successMessage = (
              <div className="message message-success">
                  Updated successfully
              </div>
          );
      }

      let errorMessage;
      if (this.props.error) {
          errorMessage = (
              <div className="message message-error">{this.props.error}</div>
          );
      }

      return (
        <form 
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}
          id="profile-form">
          {successMessage}
          {errorMessage}
          <div>
            <div className="label">
              <label>Animal Type</label>
            </div>
            {this.props.preferences.animal.map(({ name, label, checked }) => {
              return (
                <Field
                  type="checkbox"
                  name={name}
                  component={Checkbox}
                  label={label}
                  checked={checked}              
                />
              );
            })}
          </div>
          <div>
            <div className="label">
              <label>Age</label>
            </div>
            {this.props.preferences.age.map(({ name, label, checked }) => {
              return (
                <Field
                  type="checkbox"
                  name={name}
                  component={Checkbox}
                  label={label}
                  checked={checked}              
                />
              );
            })}
          </div>
          <div>
            <div className="label">
              <label>Size</label>
            </div>
            {this.props.preferences.size.map(({ name, label, checked }) => {
              return (
                <Field
                  type="checkbox"
                  name={name}
                  component={Checkbox}
                  label={label}
                  checked={checked}              
                />
              );
            })}
          </div>
          <div>
            <div className="label">
              <label>Gender</label>
            </div>
            {this.props.preferences.gender.map(({ name, label, checked }) => {
              return (
                <Field
                  type="checkbox"
                  name={name}
                  component={Checkbox}
                  label={label}
                  checked={checked}              
                />
              );
            })}
          </div>
          <div>
            <div className="label">
              <label>Health</label>
            </div>
            {this.props.preferences.health.map(({ name, label, checked }) => {
              return (
                <Field
                  type="checkbox"
                  name={name}
                  component={Checkbox}
                  label={label}
                  checked={checked}              
                />
              );
            })}
          </div>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
              Submit
            </button>
          </div>
        </form>
      );
  }
}

const mapStateToProps = state => ({
  preferences: state.adoptr.preferences
});

ProfileForm = connect(mapStateToProps)(ProfileForm);

export default reduxForm({
    form: 'profile',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('preferences', Object.keys(errors)[0]))
})(ProfileForm);