import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {hash,compare} from 'bcrypt';

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
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(401).send("User already Registered");
        const hashPassword = await hash(password,10);
        const users = new User({name,email,password : hashPassword});
        await users.save();

        return res.status(201).json({message:"Ok", id : users._id.toString()});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Error", cause : error.message});
    }
}

export const userlogin = async(req : Request,res : Response, next : NextFunction) =>{
    try{
        const {email,password}= req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(401).send("User not Registered");
        }

        const isPasswordCorrect = await compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(403).send("Invalid Password");
        }

        return res.status(200).json({message:"Ok", id : user._id.toString()});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Error", cause : error.message});
    }
}
