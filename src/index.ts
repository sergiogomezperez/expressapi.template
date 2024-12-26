import 'dotenv/config';

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const favicon = require('express-favicon');

//Express settings
app.set('port', process.env.PORT || 4000);
app.use(favicon(path.join(__dirname, '/public/images/favicon.png')));

//Cors
app.use(cors());

//Middlewares
app.use(morgan('dev'));

///Routes
app.use('/', require('./routes/root'));
app.use('/v1/', require('./routes/v1/main'));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server ready and listening: http://127.0.0.1:${app.get('port')}`);
});