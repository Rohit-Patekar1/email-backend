"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorGenerator = exports.ErrorTypes = void 0;
var http_status_codes_1 = require("http-status-codes");
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes[ErrorTypes["validationError"] = 400] = "validationError";
    ErrorTypes[ErrorTypes["internalServerError"] = 500] = "internalServerError";
    ErrorTypes[ErrorTypes["unauthorizedError"] = 401] = "unauthorizedError";
    ErrorTypes[ErrorTypes["forbiddenError"] = 403] = "forbiddenError";
    ErrorTypes[ErrorTypes["tooManyRequest"] = 429] = "tooManyRequest";
    ErrorTypes[ErrorTypes["notAcceptable"] = 406] = "notAcceptable";
    ErrorTypes[ErrorTypes["notFound"] = 404] = "notFound";
})(ErrorTypes || (exports.ErrorTypes = ErrorTypes = {}));
/**
 *
 * @param errorMessage Error message that will be thrown to the user
 * @param errorType ErrorTypes
 * @returns error
 */
function errorGenerator(errorMessage, errorType, data) {
    var error = new Error(errorMessage);
    error.name = ErrorTypes[errorType];
    return data ? { error: error, data: data } : error;
}
exports.errorGenerator = errorGenerator;
function errorHandler(error) {
    var _a, _b, _c, _d, _e, _f, _g;
    var statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    var message = (_a = error.message) !== null && _a !== void 0 ? _a : 'Internal Server Error';
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.BAD_REQUEST) {
        statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        message = (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : 'Bad Request';
    }
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.FORBIDDEN) {
        statusCode = http_status_codes_1.StatusCodes.FORBIDDEN;
        message = (_c = error === null || error === void 0 ? void 0 : error.message) !== null && _c !== void 0 ? _c : 'Bad Request';
    }
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.UNAUTHORIZED) {
        statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        message = (_d = error === null || error === void 0 ? void 0 : error.message) !== null && _d !== void 0 ? _d : 'Unauthorized';
    }
    // @ts-ignore
    if ((error === null || error === void 0 ? void 0 : error.name) === 'TokenExpiredError') {
        statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        message = 'Token is expired';
    }
    // @ts-ignore
    if ((error === null || error === void 0 ? void 0 : error.name) === 'JsonWebTokenError') {
        statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        message = 'Invalid Token';
    }
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR && (error === null || error === void 0 ? void 0 : error.message)) {
        statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        message = (_e = error === null || error === void 0 ? void 0 : error.message) !== null && _e !== void 0 ? _e : 'Internal Server Error';
    }
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.TOO_MANY_REQUESTS) {
        statusCode = http_status_codes_1.StatusCodes.TOO_MANY_REQUESTS;
        message = (_f = error === null || error === void 0 ? void 0 : error.message) !== null && _f !== void 0 ? _f : 'too many requests';
    }
    // @ts-ignore
    if (ErrorTypes[error === null || error === void 0 ? void 0 : error.name] === http_status_codes_1.StatusCodes.NOT_ACCEPTABLE) {
        statusCode = http_status_codes_1.StatusCodes.NOT_ACCEPTABLE;
        message = (_g = error === null || error === void 0 ? void 0 : error.message) !== null && _g !== void 0 ? _g : 'Not Acceptable';
    }
    return { statusCode: statusCode, message: message };
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.helper.js.map