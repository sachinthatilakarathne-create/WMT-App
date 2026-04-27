import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); 


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", taskRoutes);


let mongo_url = "mongodb+srv://ViduDB:vidu123@cluster0.fycomfi.mongodb.net/?appName=Cluster0"

mongoose.connect(mongo_url).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

app.listen(5000,()=>{
    console.log("Server is running on port: 5000");
});


