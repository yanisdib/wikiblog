import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

/**
 * Login action that receives a user id
 * @param {user id required} uid 
 */
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

/**
 * Starts the LogIn process
 * Returns an asynchronous function 
 * that returns a popup to login with a Google Account
 */
export const startLogin = (authProvider, { email, password }) => {
    return async () => {
        switch (authProvider) {
            case 'Google':
                return firebase.auth().signInWithPopup(googleAuthProvider);
            case 'Facebook':
                return firebase.auth().signInWithPopup(facebookAuthProvider);
            default:
                return firebase.auth().signInWithEmailAndPassword(email, password)
                    .catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(`${errorCode}: ${errorMessage}`);
                    });
        };
    };
};


export const logout = () => ({
    type: 'LOGOUT'
});

/**
 * Starts the LogOut process
 * Returns an asynchronous function that logOut the current user
 */
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut().then(function () {
            // Sign-out successful
            console.log('user successfully logged out!')
        }).catch(function (error) {
            // An error happened
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);
        });
    };
};