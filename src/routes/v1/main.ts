import { Router } from 'express';
const routerMain = Router();
 
routerMain.get('/getSampleEntity/', (req, res) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: cal(10, 2),
    });

    return res;
});
 
module.exports = routerMain;

const cal = (a: number, b: number): number => {
  const c: string = 'hello';
  
    return a + b;
}
