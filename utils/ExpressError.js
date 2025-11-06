class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.mess = message;
    }
}

module.exports = ExpressError;