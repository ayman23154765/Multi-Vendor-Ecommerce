import { Request, Response } from "express";

export const postSignup = (req: Request, res: Response) => {
    res.json({message: 'signup'})
}

export const postSignin = (req: Request, res: Response) => {
    res.json({message: 'signin'})
}