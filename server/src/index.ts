import express, { Express, Request, Response } from "express";
import { db } from "./db/db";
import "dotenv/config";
const cors = require('cors');
const app: Express = express();

app.use(cors({
  origin: 'http://localhost:3001',  // Allow your Next.js client
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
}));

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

