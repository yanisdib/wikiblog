import React from 'react';
import { connect } from 'react-redux';
import { startCreateUserWithEmailAndPassword } from '../../../../actions/users';
import AuthenticationForm from '../../Authentication/AuthenticationForm/AthenticationForm';

function Login(props) {
    const onSubmit = (user) => {
        props.startCreateUserWithEmailAndPassword(user);
        props.history.push('/');
        console.log(user);
    };
    return (
        <div className="row m-0">
            <div className="col-12 container">
                <AuthenticationForm onSubmit={onSubmit}>
                    <div className="form-check">
                        <input type="checkbox" id="userInputCheck" className="form-check-input" />
                        <label className="form-label-check" htmlFor="userInputCheck">Se souvenir de moi</label>
                    </div>
                </AuthenticationForm>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startCreateUserWithEmailAndPassword: (user) => dispatch(startCreateUserWithEmailAndPassword(user))
});

export default connect(undefined, mapDispatchToProps)(Login);