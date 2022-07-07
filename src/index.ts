import express , {Request,Response} from 'express';
import indexRoutes from './routes/index'

const app =express()
var cors = require('cors')

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),indexRoutes);
app.get("/",(req:Request, res:Response):void=> {

    const age :number=39;
    res.json({message:"please like this video!"});

})
app.listen("4000" , () =>{
    console.log("Server Running!");
    
}) 