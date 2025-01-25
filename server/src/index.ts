import express, { Express, Request, Response } from "express";
import { db } from "./db/db";
import "dotenv/config";

const app: Express = express();

app.get("/", async (_req: Request, res: Response) => {
    try {
        const result = await db.query("SELECT * FROM USERS");
        res.json(result.rows);
    } catch (error) {
        console.log("Error occured", error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});

