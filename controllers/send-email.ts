import { StatusCodes } from "http-status-codes";
import { errorHandler } from "../helpers/error.helper";
import { response } from "../helpers/response.helper";
import { Request, Response } from "express";
import { sendEmailService } from "../service/email-service";


export const sendEmail = async (req: Request, res: Response) => {
    try {
        const {emailData}=req.body
        await sendEmailService(emailData)
      return response.setSuccess(StatusCodes.OK, { success:true }).send(res);
    } catch (error: any) {
      console.log(error);
  
      const formattedError = await errorHandler(error);
      return response.setError(formattedError.statusCode, formattedError.message);
    }
  };
  
