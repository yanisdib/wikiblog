import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../../../actions/auth';
import AuthenticationForm from '../../Authentication/AuthenticationForm/AthenticationForm';

function Login(props) {
    const [authProvider, setAuthProvider] = useState('');

    const onSubmit = (user) => {
        props.startLogin(authProvider, user);
        props.history.push('/');
        console.log(user);
    };
    return (
        <div className="row m-0">
            <div className="col-12 container">
                <AuthenticationForm
                    btnText="Connexion"
                    onSubmit={onSubmit}
                >
                    <div className="form-check">
                        <input type="checkbox" id="userInputCheck" className="form-check-input" />
                        <label className="form-label-check" htmlFor="userInputCheck">Se souvenir de moi</label>
                    </div>
                    <Link to="/create-new-account">
                        <small id="newAccountHelp">Vous n'avez pas de compte ? Créez en un dès maintenant</small>
                    </Link>
                    <br />
                </AuthenticationForm>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (authProvider, user) => dispatch(startLogin(authProvider, user))
});

export default connect(undefined, mapDispatchToProps)(Login);