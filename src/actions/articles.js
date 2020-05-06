import {v4 as uuidv4} from 'uuid';

export const addArticle = (
    {
        title = '',
        subtitle = '',
        description = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_ARTICLE',
    article: {
        id: uuidv4(),
        title,
        subtitle,
        description,
        createdAt
    }
});

export const editArticle = (id, updates) => (
    {
        type: 'EDIT_ARTICLE',
        id,
        updates
    }
);

export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});