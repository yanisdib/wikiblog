/**
 * Authentication reducer
 * Takes a default state and an action
 * Return a user ID if a user logs in
 */
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default: return state;
    };
};