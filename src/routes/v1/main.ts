import { Router, Request, Response } from 'express';
import { ApplicationInfo } from '../../application/main';
import { verifyToken } from '../../security/authMiddleware';
import '../../database/databaseHelper'

const routerMain = Router();

routerMain.get('/getAboutAPI', (req: Request, res: Response) => {
    const app = new ApplicationInfo();
    
    res.status(200)
    res.json(app);

    return res;
});

routerMain.get('/getSampleEntity', (req: Request, res: Response) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: 33,
        requestDate: new Date().toISOString()
    });

    return res;
});

routerMain.get('/getSampleEntityWithSecurity/', verifyToken, (req: Request, res: Response) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: 33,
        requestDate: new Date().toISOString()
    });

    return res;
});
 
module.exports = routerMain;
