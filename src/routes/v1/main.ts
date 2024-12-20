import crypto from 'crypto';
import { Router } from 'express';
const routerMain = Router();

routerMain.get('/getSampleEntity/', (req, res) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: 33,
        date: new Date().toISOString()
    });

    return res;
});

routerMain.get('/getExpectedArrivals/', (req, res) => {
    const API_KEY: string = "71c6a43949ce5b72ce21e9dddc5f6995";
    const PORT_CODE: string = "ESSCT";
    const ENDPOINT: string = `https://api.vesselfinder.com/expectedarrivals?userkey=${API_KEY}&interval=1440&locode=${PORT_CODE}`;
    
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        res.status(200)
        res.json({
            result: 'ok',
            message: data
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        res.status(500);
        res.json({
            result: 'error',
            message: error
        });
    });
});
 
module.exports = routerMain;
