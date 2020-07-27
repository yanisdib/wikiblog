export default (comments = {}) => {
    return (Object.keys(comments).map(function (key) {
        return comments[key];
    }));
};