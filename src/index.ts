import 'dotenv/config';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { ApplicationInfo } from './application/main';

const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const favicon = require('express-favicon');

//App
const appInfo = new ApplicationInfo()

//Express settings
app.set('port', process.env.PORT || 4000);
app.use(favicon(path.join(__dirname, '/public/images/favicon.png')));

//Cors
app.use(cors());

//Middlewares
app.use(morgan('dev'));

//Routes
app.use('/', require('./routes/root'));
app.use('/v1/', require('./routes/v1/main'));

//Swagger
const swaggerOptions: any = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: appInfo.name,
        version: appInfo.version,
        description: appInfo.description,
      },
      servers: [
        {
          url: `http://localhost:${app.get('port')}`,
        },
      ],
    },
    apis: [
        './src/routes/root.ts',
        './src/routes/v1/main.ts',
    ],
  };
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server ready and listening: http://127.0.0.1:${app.get('port')}`);
});