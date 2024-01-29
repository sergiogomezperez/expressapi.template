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
 
module.exports = routerMain;
