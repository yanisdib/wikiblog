import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { startCreateUserWithEmailAndPassword } from '../../../../actions/users';
import { useInput } from '../../../../hooks/input-hook';
import AuthenticationForm from '../AuthenticationForm/AthenticationForm';

function CreateAccount(props) {
    const onSubmit = (user) => {
        props.startCreateUserWithEmailAndPassword(user);
        props.history.push('/');
        console.log(user);
    };
    let createdAt = moment().format();
    console.log(createdAt);
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const userData = { firstName, lastName, createdAt };
    const reset = { resetFirstName, resetLastName };
    return (
        <div className="row m-0">
            <div className="col-12 container">
                <AuthenticationForm
                    onSubmit={onSubmit}
                    userData={userData}
                    reset={reset}
                >
                    <div className="form-group">
                        <label htmlFor="userInputFirstName">Prénom *</label>
                        <input
                            type="firstName"
                            id="userInputFirstName"
                            className="form-control"
                            aria-describedby="firstNameHelp"
                            placeholder="Prénom"
                            {...bindFirstName}
                        />
                        <label htmlFor="userInputLastName">Nom *</label>
                        <input
                            type="lastName"
                            id="userInputLastName"
                            className="form-control"
                            aria-describedby="lastNameHelp"
                            placeholder="Nom"
                            {...bindLastName}
                        />
                        <small id="firstNameHelp" className="form-text text-muted">Ces informations seront utilisées pour identifier vos notes et commentaires</small>
                    </div>
                </AuthenticationForm>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startCreateUserWithEmailAndPassword: (user) => dispatch(startCreateUserWithEmailAndPassword(user))
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);