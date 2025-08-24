import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {hash} from 'bcrypt';

export const getAllUsers = async(req : Request,res : Response, next : NextFunction) =>{
    try{
        const users =await User.find();

        return res.status(200).json({message:"Ok", users});
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Error", cause : error.message});
    }
}

export const userSignup = async(req : Request,res : Response, next : NextFunction) =>{
    try{
        const {name,email,password}= req.body;
        const hashPassword = await hash(password,10);
        const users = new User({name,email,password : hashPassword});
        await users.save();

        return res.status(200).json({message:"Ok", id : users._id.toString()});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Error", cause : error.message});
    }
}
