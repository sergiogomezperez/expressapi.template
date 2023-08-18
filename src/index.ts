import 'dotenv/config';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const favicon = require('express-favicon');

//Express settings
app.set('port', process.env.PORT || 3010);
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Cors
app.use(cors());

//Middleware
app.use(morgan('dev'));

///Routes
app.use('/', require('./routes/root'));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server ready and listening: http://127.0.0.1:${app.get('port')}`);
});
