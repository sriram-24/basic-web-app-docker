import express, { Express, Request, Response } from "express";
import "dotenv/config";
import notesRoute from './routes/notes'
const cors = require('cors');
const app: Express = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',  // Allow your Next.js client
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
}));

app.use("/notes",notesRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});

