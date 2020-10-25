import { firebase } from '../firebase/firebase';
import database from '../firebase/firebase';

/**
 * 
 */
export const createUserWithEmailAndPassword = (user) => ({
    type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD',
    user
});


/**
 * Create a new user with an email and a password
 * And save that user in the firebase project
 * @param {user} param0
 * user is an object containing a user IDs
 */
export const startCreateUserWithEmailAndPassword = (userDefaultData = {}) => {
    return async (dispatch, getState) => {
        const {
            email = '',
            password = '',
            firstName = '',
            lastName = '',
        } = userDefaultData;
        const creationTime = getState().auth.uid.metadata.a;
        const userData = { email, password, firstName, lastName, createdAt: creationTime };
        try {
            // Creates a new user with email and password
            // And an object with his ID
            // Logs the new user in
            return firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    try {
                        // Writes the new user's data into the database
                        // Then dispatch the function createUserWithEmailAndPassword
                        // that takes an object with new user's data
                        // and his ID from the user object returned by the method above
                        return database.ref('users').push(userData).then(() => {
                            dispatch(createUserWithEmailAndPassword({
                                id: user.uid,
                                ...userData
                            }));
                            console.log(user);
                        });
                    }
                    catch (error) {
                        // Handle Errors
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(`${errorCode}: ${errorMessage}`);
                    }
                });
        } catch (error) {
            // Handle Errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);
        }
    };
};