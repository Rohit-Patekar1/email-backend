"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.ResponseStructure = void 0;
var ResponseStructure = /** @class */ (function () {
    function ResponseStructure(statusCode, data, message) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
    ResponseStructure.prototype.setSuccess = function (statusCode, data) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = true;
        return this;
    };
    ResponseStructure.prototype.setError = function (statusCode, message, data) {
        if (data === void 0) { data = {}; }
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.data = data;
        return this;
    };
    ResponseStructure.prototype.send = function (res) {
        if (this.success) {
            return res.status(this.statusCode).json(this.data);
        }
        return res.status(this.statusCode).json({
            message: this.message,
            data: this.data,
        });
    };
    return ResponseStructure;
}());
exports.ResponseStructure = ResponseStructure;
var response = new ResponseStructure();
exports.response = response;
//# sourceMappingURL=response.helper.js.map