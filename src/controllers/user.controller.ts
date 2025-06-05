import express,{ Request , Response } from "express";
import User from "../model/user.model";
import { Router } from "express";
const router = Router();

// Get all users
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find(); // Get users from MongoDB
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};


// Create new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, userid, age, email, password } = req.body;

    const newUser = new User({ username, userid, age, email, password });
    const saveUser = await newUser.save();
    // console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId); 
    res.json(user); 
   }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { username, userid, age, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, userid, age, email, password },
      { new: true, runValidators: true } // return updated doc + validate schema
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error });
  }
};


export default router;