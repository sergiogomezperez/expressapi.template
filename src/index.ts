import 'dotenv/config';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const favicon = require('express-favicon');

//Express settings
app.set('port', process.env.PORT || 3010);
app.use(favicon(__dirname + '/public/images/favicon.png'));

//Cors
app.use(cors());

//Middleware
app.use(morgan('dev'));

///Routes
app.use('/', require('./routes/root'));

//Start server
app.listen(app.get('port'), () => {
    console.log(`🔹 Template for TypeScript + Express + NodeJS API REST`);
    console.log(`🔹 Morgan is running and listening`);
    console.log(`🔹 Express Server is running and listening: http://127.0.0.1:${app.get('port')}`);
});
