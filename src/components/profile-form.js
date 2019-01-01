import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Checkbox from './checkbox';
import {required, nonEmpty, email} from '../validators';
import {connect} from 'react-redux';
import {postPreferences} from '../actions/preferences';
import './profile-form.css';

export class ProfileForm extends React.Component {
  onSubmit(values) {
    values.username = this.props.username.username;
    this.props.dispatch(postPreferences(values));
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
          <div>
            <div className="label">
              <label>Animal Type</label>
            </div>
            <Field
              type="checkbox"
              name='dog'
              component={Checkbox}
              label='Dog'
              checked={this.props.preferences.pet.dog}              
            />
            <Field
              type="checkbox"
              name='cat'
              component={Checkbox}
              label='Cat'
              checked={this.props.preferences.pet.cat}              
            />
          </div>
          <div>
            <div className="label">
              <label>Age</label>
            </div>
            <Field
              type="checkbox"
              name='puppyOrKitten'
              component={Checkbox}
              label='Puppy or Kitten'
              checked={this.props.preferences.pet.puppyOrKitten}              
            />
            <Field
              type="checkbox"
              name='young'
              component={Checkbox}
              label='Young'
              checked={this.props.preferences.pet.young}              
            />
            <Field
              type="checkbox"
              name='adult'
              component={Checkbox}
              label='Adult'
              checked={this.props.preferences.pet.adult}              
            />
            <Field
              type="checkbox"
              name='senior'
              component={Checkbox}
              label='Senior'
              checked={this.props.preferences.pet.senior}              
            />
          </div>
          <div>
            <div className="label">
              <label>Size</label>
            </div>
            <Field
              type="checkbox"
              name='small'
              component={Checkbox}
              label='Small'
              checked={this.props.preferences.pet.small}              
            />
            <Field
              type="checkbox"
              name='medium'
              component={Checkbox}
              label='Medium'
              checked={this.props.preferences.pet.medium}              
            />
            <Field
              type="checkbox"
              name='large'
              component={Checkbox}
              label='Large'
              checked={this.props.preferences.pet.large}              
            />
            <Field
              type="checkbox"
              name='extraLarge'
              component={Checkbox}
              label='Extra Large'
              checked={this.props.preferences.pet.extraLarge}              
            />
          </div>
          <div>
            <div className="label">
              <label>Gender</label>
            </div>
            <Field
              type="checkbox"
              name='male'
              component={Checkbox}
              label='Male'
              checked={this.props.preferences.pet.male}              
            />
            <Field
              type="checkbox"
              name='female'
              component={Checkbox}
              label='Female'
              checked={this.props.preferences.pet.female}              
            />
          </div>
          <div>
            <div className="label">
              <label>Good With</label>
            </div>
            <Field
              type="checkbox"
              name='dogs'
              component={Checkbox}
              label='Dogs'
              checked={this.props.preferences.pet.dogs}              
            />
            <Field
              type="checkbox"
              name='cats'
              component={Checkbox}
              label='Cats'
              checked={this.props.preferences.pet.cats}              
            />
            <Field
              type="checkbox"
              name='children'
              component={Checkbox}
              label='Children'
              checked={this.props.preferences.pet.children}              
            />
          </div>
          <div>
            <div className="label">
              <label>Health</label>
            </div>
            <Field
              type="checkbox"
              name='altered'
              component={Checkbox}
              label='Altered'
              checked={this.props.preferences.pet.altered}              
            />
            <Field
              type="checkbox"
              name='hasShots'
              component={Checkbox}
              label='Vaccinated'
              checked={this.props.preferences.pet.hasShots}              
            />
            <Field
              type="checkbox"
              name='housetrained'
              component={Checkbox}
              label='Housetrained'
              checked={this.props.preferences.pet.housetrained}              
            />
          </div>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
              Submit
            </button>
          </div>
          {successMessage}
          {errorMessage}
        </form>
      );
  }
}

const mapStateToProps = state => ({
  preferences: state.preferences,
  username: state.auth.currentUser
});

ProfileForm = connect(mapStateToProps)(ProfileForm);

export default reduxForm({
    form: 'profile',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('preferences', Object.keys(errors)[0]))
})(ProfileForm);