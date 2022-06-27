import { AppDataSource } from "../data-source";
import {Request, Response} from "express"
import { Comment } from "../entity/Comment";

export class commentController{
  
    static createData = async (req: Request, res:Response)=>{
        const newComment = {
            comment: req.body.comment
        }
        try{
            
            const comment = AppDataSource.getRepository(Comment).create(newComment)
            const result = await AppDataSource.getRepository(Comment).save(comment)
            res.json({data:result, message: "Commented Successfully"})
        }catch(err){
            res.json({message:err.message})
        }
    }
    static getAllComment =async (req:Request, res:Response)=>{
        try{

            const result =await AppDataSource.getRepository(Comment).find()
            res.json(result)
        }catch(err){
            res.json({message:err.message})
        }
    }
    static getCommentById = async (req:Request, res:Response)=>{
        const id = Number(req.params.id);
        try{

            const result = await AppDataSource.getRepository(Comment).findOneBy({id:id})
            res.json(result)
        }catch(err){
            res.json(err.message)
        }
    }
    static updateComment = async( req:Request, res:Response)=>{
        const id = Number(req.params.id);
        try{

            const existingComment = await AppDataSource.getRepository(Comment).findOneByOrFail({id:id})
            const updatedComment = req.body
            const comment = {...existingComment, ...updatedComment}
                
                const result = await AppDataSource.getRepository(Comment).save(comment)
                res.json(result)
          
        }
        catch(err){
            res.json(err.message)
        }
      
    }
    static deleteComment = async(req:Request, res:Response)=>{
        try{

            const id = Number(req.params.id);
            const deletedComment = await AppDataSource.getRepository(Comment).delete(id)
            res.json({message:"Comment Deleted successfully"})
        }catch(err){
            res.json(err.message)
        }
    }
   

}