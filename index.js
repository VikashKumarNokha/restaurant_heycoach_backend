const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors());
app.use(bodyParser.json());

//  testing the server
app.get("/", (req, res)=>{
     res.status(200).send("Hello server");
})


app.listen(5000, ()=>{
     console.log("server running on port 5000");
})
