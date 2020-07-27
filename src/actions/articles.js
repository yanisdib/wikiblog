import database from '../firebase/firebase';

// Function that adds an article
export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

/**
 * Takes an object articleData or a default empty object 
 * Pushes the article object at the given reference in the database
 * A promise is then triggered and dispatches our data to update the state
 * calling the function addArticle.
 */
export const startAddArticle = (articleData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
            subtitle = '',
            description = '',
            category = '',
            permalink = '',
            imageUrl = '',
            isFeatured = '',
            createdAt = 0
        } = articleData;
        const article = { title, subtitle, description, category, permalink, imageUrl, isFeatured, createdAt };
        return database.ref('articles').push(article).then((ref) => {
            dispatch(addArticle({
                id: ref.key,
                ...article
            }));
            console.log('Data successfully created!');
        });
    };
};

// Function that edits an article
export const editArticle = (id, updates) => (
    {
        type: 'EDIT_ARTICLE',
        id,
        updates
    }
);

/**
 * Takes the id of an object and its updated data 
 * Updates the article object at the given reference in the database 
 * with new data passed before.
 * A promise is then triggered and dispatches our data to update the state
 * calling the function editArticle.
 */
export const startEditArticle = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`articles/${id}`).update(updates)
            .then(() => {
                dispatch(editArticle(id, updates));
                console.log('Data successfully updated!');
            });
    };
};

// Function that removes an article
// takes a destructured object looking for id property
export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

/**
 * Takes the id property of a destructured object
 * Removes the article object from database at the given reference and id.
 * A promise is then triggered and dispatches our data to update the state
 * calling the function removeArticle.
 */
export const startRemoveArticle = ({ id } = {}) => {
    return (dispatch, getState) => {
        return database.ref(`articles/${id}`).remove().then(() => {
            dispatch(removeArticle({ id }));
        });
    };
};

// Function that gets all articles
export const getArticles = (articles) => ({
    type: 'GET_ARTICLES',
    articles
});

/** 
 * Fetches and pushes every article ordered by date of creation
 * at the given reference in the database one time into an empty array.
 * A promise is then triggered and dispatches our data to update the state
 * calling the function getArticles.
 */
export const startGetArticles = () => {
    return (dispatch) => {
        return database.ref('articles')
            .orderByChild('createdAt')
            .once('value').then((snapshot) => {
                const articles = [];

                snapshot.forEach((childSnapshot) => {
                    articles.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(getArticles(articles));
            });
    };
};