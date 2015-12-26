var util = require('util');

var statusCode = 404;
var defaultMsg = 'Not Found.';

module.exports = function NotFoundError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || defaultMsg;
    this.status = statusCode;
};

util.inherits(module.exports, Error);