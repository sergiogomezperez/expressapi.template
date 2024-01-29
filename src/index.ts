import 'dotenv/config';
import { ApplicationInfo } from './application/applicationInfo'; 
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import favicon from 'express-favicon';

const app = express();

//Express settings  
app.set('port', process.env.PORT || 3010);
app.use(favicon(__dirname + '/public/images/favicon.png'));

//Cors
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // Gestión de los datos de los formularios POST

///Routes
app.use('/', require('./routes/root'));
app.use('/v1/', require('./routes/v1/main'));

//Start server

app.listen(app.get('port'), () => {
    const appInfo = new ApplicationInfo();
    console.log(`🔹 ${appInfo.name.toUpperCase()} ${appInfo.version}`)
    console.log(`🔹 Developed by ${appInfo.developed_by}`);
    console.log(`=============================================`);
    console.log(`🔹 Morgan is running and listening`);
    console.log(`🔹 Express Server is running and listening: http://127.0.0.1:${app.get('port')}`);
});
