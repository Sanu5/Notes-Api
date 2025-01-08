const express = require("express");
const userRouter = require("./userRoutes");
const noteRouter = require("./noteRoutes");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const corse = require("cors");

dotenv.config();

app.use(express.json());

app.use(corse());


app.use("/users", userRouter)
app.use("/notes", noteRouter)

app.get("/", (req, res)=>{
    res.send("Hi you have reached Anish Notes Api");
});

app.get("/quote", (req, res)=>{
    res.send("Quote");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, () =>{
        console.log("Server started on port no. " + PORT);
    })

}).catch((error)=>{
    console.log(error);
})

