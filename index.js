const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const  userRouter = require("./routes/user.routes");

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());




//  testing the server
app.get("/", (req, res)=>{
     res.status(200).send("Hello server");
})

app.use("/api/v1/users", userRouter );


app.listen(5000, ()=>{
     console.log("server running on port 5000");
})
