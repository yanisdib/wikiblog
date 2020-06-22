
// Add a comment.

import database from '../firebase/firebase';

// Takes an object comment as params.
export const addComment = (comment) => ({
    type: 'ADD_COMMENT',
    comment
});

export const startAddComment = (idArticle, commentData = {}) => {
    return (dispatch, getState) => {
        const {
            username = '',
            title = '',
            body = '',
            createdAt = 0
            // id_user to replace username once authentication is implemented 
            // id_user = ''
        } = commentData;
        const comment = { username, title, body, createdAt };
        return database.ref(`articles/${idArticle}/comments`).push(comment).then((ref) => {
            dispatch(addComment({
                id: ref.key,
                ...comment
            }));
            console.log('Comment has been successfully added!')
        });
    };
};

// Edit a comment of given id and updates with updated data passed in.
export const editComment = (id, updates) => ({
    type: 'EDIT_COMMENT',
    id,
    updates
});

// Remove comment object of matching id
export const removeComment = ({ id } = {}) => ({
    type: 'REMOVE_COMMENT',
    id
});

export const getComments = (comments) => ({
    type: 'GET_COMMENTS',
    comments
});