"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var fetch_data_1 = require("./controllers/fetch-data");
var send_email_1 = require("./controllers/send-email");
var validators_1 = require("./middleware/validators");
var router = express_1.default.Router();
exports.router = router;
router.get('/transactions', fetch_data_1.fetchTransactionList);
router.post('/send-email', validators_1.emailValidator, send_email_1.sendEmail);
//# sourceMappingURL=routes.js.map