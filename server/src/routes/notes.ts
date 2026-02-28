import express, { NextFunction, Request, Response, Router } from "express";
import { db } from "../db/db";
import "dotenv/config"
import { populateSampleData } from "../db/createSample";

const router :Router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const result = await db.query("SELECT * FROM USERS");
        res.json(result.rows);
    } catch (error) {
        console.log("Error occured", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/new",(req : Request, 
    res : Response) =>{
    const {name} = req.body;
    if(!name || name==""){
        res.json({
            message: "name is required.",
            status : 400
        }).status(400)
    }
    // TODO: complete the api by sending data to the database.
    res.status(200).json({name:name})
})

router.post("/populatesampledata", async (req: Request, res: Response) => {
    try{
        const {password} = req.body;
        if(password !== process.env.SAMPLEDATA_PASS){
            res.status(403).json({
                message: "Access forbidden.",
                status: 403
            })
            return;
        }
        
        await populateSampleData()
        res.status(200).json({
            message: "Successful.",
            status: 200
        })
    }catch(error){
        console.log("Error occured", error)
        res.status(500).json({
            message: "Error ocurred: Failed to create data",
            status:500
        })
    }
})

export default router;


