import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

const passwordLength = length({min: 4, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="registration-form"
                id="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="register-username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="register-username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="register-password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="register-password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="register-passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="register-passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
