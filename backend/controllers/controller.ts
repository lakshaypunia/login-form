import { Request, Response, NextFunction } from "express";
import { PrismaClient ,} from "@prisma/client";

const prisma = new PrismaClient(); 

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { uid, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email : uid } });
    if (user){
      const isPasswordValid = password === user.password ? true : false;
      if (isPasswordValid){
         res.status(201).json({success: true, message: "user already exists   logined succesfully" });
      }
      else{
         res.status(201).json({success: false, message: "login failed username already exists but password entered is incorrect" });
      }
      return
    }

    const newUser = await prisma.user.create({ 
      data: {
        email : uid,
        password
      },
    });
     res.status(201).json({success: true, message: "New User created successfully", user: newUser });
     return
  } catch (error) {
    next(error);
  }
};