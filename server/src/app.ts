
import express  from "express";
import { sampleUser } from "./data";

const app = express()
 app.get('/api/user',(req, res)=>{
    res.json(sampleUser)
 })

 const PORT =4000
 app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
 })

