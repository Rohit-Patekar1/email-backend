import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { errorHandler } from "../helpers/error.helper";
import { response } from "../helpers/response.helper";

import { fetchTransactions } from "../service/transaction-service";

export const fetchTransactionList = async (req: Request, res: Response) => {
  try {
    const { skip, limit } = req.query;

    const transactionList = await fetchTransactions(
      parseInt(skip!.toString()),
      parseInt(limit!.toString()),
    );

    return response.setSuccess(StatusCodes.OK, transactionList).send(res);
  } catch (error: any) {
    const formattedError = await errorHandler(error);
    return response
      .setError(formattedError.statusCode, formattedError.message)
      .send(res);
  }
};


