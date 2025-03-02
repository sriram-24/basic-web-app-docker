import express, { NextFunction, Request, Response, Router } from "express";
import { db } from "../db/db";

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

export default router;


