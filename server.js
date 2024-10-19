import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.get('/', function(req,res){res.send('alpan')});
app.use(bodyParser.json());
app.listen(PORT, ()=>
     console.log(
        `server berjalan di port : http://localhost${PORT}`));
