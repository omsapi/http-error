var util = require('util');

var statusCode = 400;
var defaultMsg = 'Bad Request.';

module.exports = function BadRequestError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || defaultMsg;
    this.status = statusCode;
};

util.inherits(module.exports, Error);