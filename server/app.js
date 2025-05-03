const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");


const allowedOrigins = ["http://localhost:5173" , "https://task-management-system-seven-topaz.vercel.app/"];
const corsOption = {
    origin:function(origin , callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null , true);
        }
        else{
            console.log("blocked by origin: " , origin)
        }
    },
    credentials:true,
    optionsSuccessStatus: 200
};
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));

app.get("/hello" , (req , res)=>{
    res.send('Hello World!');
})
//routes
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user" , userRoutes);

const projectRoutes = require("./routes/project.routes");
app.use("/api/v1/project" , projectRoutes);

const taskRoutes = require("./routes/task.routes");
app.use("/api/v1/task" , taskRoutes);

module.exports = app;