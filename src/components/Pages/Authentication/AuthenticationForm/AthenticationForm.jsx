import React, { useState } from 'react';
import { useInput } from '../../../../hooks/input-hook';

function AuthenticationForm(props) {
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
    const [error, setError] = useState('');
    const userData = props.userData ? (props.userData) : ('');

    console.log(userData);

    const onSubmit = (e) => {
        e.preventDefault();
        const regexPassword = /^S*[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/g;
        const regexEmail = /^S*[a-zA-Z0-9!@)(.]{1,}$/g;
        const regexAlpha = /^[a-zA-Z]$/g;
        if (!email || !password) {
            setError('Veuillez saisir une adresse mail et un mot de passe');
        }
        // else if (!userData) {
        //     setError('Veuillez saisir votre nom et prénom');
        // }
        else {
            setError('');
            if (email.match(regexEmail) && password.match(regexPassword)) {
                props.onSubmit(
                    {
                        email: email,
                        password: password,
                        ...userData
                    }
                );
                resetEmail();
                resetPassword();
            }
            else if (!regexEmail.test(email)) {
                setError('Veuillez entre une adresse email valide.')
            }
            else if (!regexPassword.test(password)) {
                setError('Votre mot de passe comporte des caractères non-valides.')
            };
        };
    };
console.log(props.btnText);

    return (
        <div className="row align-items-center">
            <div className="col-6">
                <small id="error" className="text-danger">{error}</small>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="userInputEmail">Identifiant</label>
                        <input
                            type="email"
                            id="userInputEmail"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Saisir une adresse email"
                            {...bindEmail}
                        />
                        <small id="emailHelp" className="form-text text-muted">L'adresse que vous avez choisi lors de votre inscription</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Mot de passe</label>
                        <input
                            type="password"
                            id="userInputPassword"
                            className="form-control"
                            aria-describedby="passwordHelp"
                            placeholder="Mot de passe"
                            {...bindPassword}
                        />
                    </div>
                    <small id="infoData" className="form-text text-muted text-danger">* Information obligatoire</small>
                    {props.children}
                    <button type="submit" className="btn btn-primary">{props.btnText}</button>
                </form>
            </div>
        </div>
    );
};

export default AuthenticationForm;