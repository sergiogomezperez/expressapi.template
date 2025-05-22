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
const YAML = require('yaml')
const fs = require("fs")
const file  = fs.readFileSync(path.join(__dirname, '/public/swagger/swagger.yaml'), 'utf8')
const swaggerDocument = YAML.parse(file)
// const swaggerDocument = require(path.join(__dirname, '/public/swagger/swagger.yaml'));

//Express settings
app.set('port', process.env.PORT || 4000);
app.use(favicon(path.join(__dirname, '/public/images/favicon.png')));

//App
const appInfo = new ApplicationInfo()
const swaggerOptions: swaggerJsdoc.Options = {
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

//Cors
app.use(cors());

//Middlewares
app.use(morgan('dev'));

//Routes
app.use('/', require('./routes/root'));
app.use('/v1/', require('./routes/v1/main'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server ready and listening: http://127.0.0.1:${app.get('port')}`);
});