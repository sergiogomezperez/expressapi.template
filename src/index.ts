import 'dotenv/config';
import { ApplicationInfo } from './application/applicationInfo'; 
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import favicon from 'express-favicon';
import bodyParser from 'body-parser'

const app = express();


//Express settings  
ApplicationInfo.initializeFromEnvFile();
app.set('port', ApplicationInfo.port || 4000);
app.use(favicon(__dirname + '/public/images/favicon.png')); // Ejecutar npm run copy-files-linux o npm run copy-files-windows

//Cors
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // Gestión de los datos de los formularios POST
app.use(bodyParser.json()); //Handles JSON requests
app.use(bodyParser.urlencoded({ extended: false })); //Handles normal post requests

///Routes
app.use('/', require('./routes/root'));
app.use('/v1/', require('./routes/v1/main'));

//Start server
app.listen(app.get('port'), () => {
    console.log(`🔹 ${ApplicationInfo.appName.toUpperCase()} ${ApplicationInfo.version}`)
    console.log(`🔹 Developed by ${ApplicationInfo.developed_by}`);
    console.log(`=============================================`);
    console.log(`🔹 Morgan is running and listening`);
    console.log(`🔹 Express Server is running and listening: http://127.0.0.1:${app.get('port')}`);
});
