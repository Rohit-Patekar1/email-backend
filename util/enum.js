"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionType = exports.Collections = void 0;
var Collections;
(function (Collections) {
    Collections["wallet"] = "user_wallet";
    Collections["transactions"] = "transactions";
    Collections["emailData"] = "emailData";
})(Collections || (exports.Collections = Collections = {}));
var transactionType;
(function (transactionType) {
    transactionType["debit"] = "DEBIT";
    transactionType["credit"] = "CREDIT";
})(transactionType || (exports.transactionType = transactionType = {}));
//# sourceMappingURL=enum.js.map