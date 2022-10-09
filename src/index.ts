import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app = express();
dotenv.config();
// Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME



app.get('/', (request, response) => {
    response.send('Hello world!');
});

async function start() {
    try{
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.tcaec4r.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()