import articlesReducer from '../../reducers/articles';
import articles from '../fixtures/articles';

test('should set default state', () => {
    const state = articlesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

/**
 * Initialize constants with an object of two properties
 * and a reducer with a nested object and an action as params.
 * Expect state to equal an array of n elements depending on action.
 */


// REMOVE_ARTICLE
test('should remove an article by id', () => {
    const action = {
        type: 'REMOVE_ARTICLE',
        id: articles[1].id
    };
    const state = articlesReducer(articles, action);
    expect(state).toEqual([articles[0], articles[2]]);
});

// ADD_ARTICLE
test('should add an article', () => {
    const article = {
        id: '4',
        title: 'The Legend of Zelda',
        subtitle: 'The best open-world of its generation?',
        description: 'Good question but this is a simple test.',
        createdAt: 250000
    };
    const action = {
        type: 'ADD_ARTICLE',
        article
    };
    const state = articlesReducer(articles, action);
    expect(state).toEqual([...articles, article])
});

// EDIT_ARTICLE
test('should edit an article by id', () => {
    const title = "The Legend of Zelda: Breath of the Wild";
    const action = {
        type: 'EDIT_ARTICLE',
        id: articles[1].id,
        updates: {
            title
        }
    };
    const state = articlesReducer(articles, action);
    expect(state[1].title).toEqual(title);
});

// EDIT_ARTICLE WITH NONEXISTENT DATA
test('should not edit if id doesn\'t exist', () => {
    const subtitle = "Would this work?";
    const action = {
        type: 'EDIT_ARTICLE',
        id: '8',
        updates: {
            subtitle
        }
    };
    const state = articlesReducer(articles, action);
    expect(state).toEqual(articles);
});