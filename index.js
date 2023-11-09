const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const  userRouter = require("./routes/user.routes");
const restaurantRouter = require("./routes/restaurant.routes")

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());


//  testing the server
app.get("/", (req, res)=>{
     res.status(200).send("Hello server");
})

app.use("/api/v1/users", userRouter );
app.use("/api/v1/restaurants", restaurantRouter );


// For Error handling
app.use((err, req, res, next) => {
     const statusCode = err.statusCode || 500;
     const message = err.message || "Internal Server Error";
     return res.status(statusCode).json({
       success: false,
       message,
       statusCode,
     });
   });
   

//    app  listener 
app.listen(5000, ()=>{
     console.log("server running on port 5000");
})
