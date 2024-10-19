import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./mobil.js";
import userRoute from './user.js';


const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/mobil",mobilRoute);
app.use("/user",userRoute);

app.get('/', (req,res) =>{
    console.log(['GET ROUTE']);
    res.send("selamat pagi");
});


app.listen(PORT, ()=>
     console.log(
        `server berjalan di port : http://localhost:${PORT}`)
);
