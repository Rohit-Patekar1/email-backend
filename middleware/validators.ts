import joi from 'joi';
import { NextFunction, Request, Response } from 'express';

export const emailValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = joi
      .object({
        emailData: joi.array().required(),
      })
      .required();
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

