const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                action.comment
            ];
        case 'EDIT_COMMENT':
            return state.map((comment) => {
                if (action.id === comment.id) {
                    return {
                        ...comment,
                        ...action.updates
                    };
                }
                else {
                    return state;
                };
            });
        case 'REMOVE_COMMENT':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
} 