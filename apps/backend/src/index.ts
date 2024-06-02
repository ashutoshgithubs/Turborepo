import express from "express";
import {BACKEND_URL} from "@repo/common/config"
const app = express()
const port = 5000
app.get("/", (req, res) => {
    console.log(BACKEND_URL)
    res.json({
        message: "hello world",
        data:BACKEND_URL
    });
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})