import { db } from "./db"

const QUERY = `
CREATE TABLE USERS(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO USERS(name) 
VALUES
("John Doe"),
("Jane Doe"),
("Brock"),
("Cal");
`

export const populateSampleData = async() =>{
       try {
            const response = await db.query(QUERY);
       } catch (error) {
            throw error
       } 
}
