var util = require('util');

var statusCode = 409;
var defaultMsg = 'Conflict.';

module.exports = function ConflictError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || defaultMsg;
    this.status = statusCode;
};

util.inherits(module.exports, Error);