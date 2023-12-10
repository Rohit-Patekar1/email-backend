import express from 'express'
import { fetchTransactionList } from './controllers/fetch-data';
import { sendEmail } from './controllers/send-email';
import { emailValidator } from './middleware/validators';
const router = express.Router()


router.get('/transactions',fetchTransactionList);
router.post('/send-email',emailValidator,sendEmail);

export {router}