var util = require('util');

var statusCode = 500;
var defaultMsg = 'Internal Server Error.';

module.exports = function InternalError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || defaultMsg;
    this.status = statusCode;
};

util.inherits(module.exports, Error);