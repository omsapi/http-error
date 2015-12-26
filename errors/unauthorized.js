var util = require('util');

var statusCode = 401;
var defaultMsg = 'Unauthorized.';

module.exports = function UnauthorizedError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || defaultMsg;
    this.status = statusCode;
};

util.inherits(module.exports, Error);