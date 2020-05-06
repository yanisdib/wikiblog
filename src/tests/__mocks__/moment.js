const moment = require.requireActual('moment');

// Takes timestamp, if not : set it to 0.
// Return an instance of moment taking our timestamp
export default (timestamp = 0) => {
    return moment(timestamp);
};