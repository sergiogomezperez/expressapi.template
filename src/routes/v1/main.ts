import crypto from 'crypto';
import { Router } from 'express';
const routerMain = Router();
const databaseHelper = require('../../database/databaseHelper');

routerMain.get('/getSampleEntity/', (req, res) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: 33,
        date: new Date().toISOString()
    });

    return res;
});

routerMain.post('/createCommercialOfferRequestItem/', (req, res) => {
    try {
        const mail: any = databaseHelper.createClassifiedMail(req.body, true);
        
        res.status(200)
        res.json({
            result: 'ok',
            message: 'ok'
        });
    }
    catch(err) {
        res.status(500)
        res.json({
            result: 'error',
            message: 'Error creating commercial offer request item'
        });
    }
   
    return res;
});
 
module.exports = routerMain;
