import database from '../firebase/firebase';

export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

export const startAddArticle = (articleData = {}) => {
    return (dispatch, getState) => {
        const {
            title = '',
            subtitle = '',
            description = '',
            createdAt = 0
        } = articleData;
        const article = { title, subtitle, description, createdAt };
        return database.ref('articles').push(article).then((ref) => {
            dispatch(addArticle({
                id: ref.key,
                ...article
            }));
            console.log('Data successfully created!');
        });
    };
};

export const editArticle = (id, updates) => (
    {
        type: 'EDIT_ARTICLE',
        id,
        updates
    }
);

export const startEditArticle = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`articles/${id}`).update(updates)
            .then(() => {
                dispatch(editArticle(id, updates));
                console.log('Data successfully updated!');
            });
    };
};

export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const startRemoveArticle = ({ id } = {}) => {
    return (dispatch, getState) => {
        return database.ref(`articles/${id}`).remove().then(() => {
            dispatch(removeArticle({ id }));
        });
    };
};


export const getArticles = (articles) => ({
    type: 'GET_ARTICLES',
    articles
});

export const startGetArticles = () => {
    return (dispatch, getState) => {
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
                console.log(articles);
            });
    };
};