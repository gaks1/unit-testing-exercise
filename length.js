const stringLength = string => {
    if (string.length < 1 || string.length > 10) {
        throw new Error('String must be greater than 0 and less than 10 characters');
    }
    return string.length;
}


module.exports = stringLength;