import { Router } from 'express';
import axios from 'axios';
import { JWT, LoginInfo } from './types';
const routerMain = Router();
const CRM_API_BASE_URL = 'http:/127.0.0.1:8000/api';

const JWT: JWT = { AccessToken: null, RefreshToken: null };
 
routerMain.get('/getSampleEntity/', (req, res) => {
    res.status(200)
    res.json({
        name: 'John Doe',
        age: 33,
        date: new Date().toISOString()
    });

    return res;
});

routerMain.post('/login/', (req: any, res) => {
    let headersList = {
        "Accept": "*/*",
       }
       
    let formdata = new FormData();
    formdata.append("username", req.body.username);
    formdata.append("password", req.body.password);
    
    let bodyContent =  formdata;
    
    let reqOptions = {
        url: "http://127.0.0.1:8000/api/token/login/",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
    
    axios.request(reqOptions)
    .then((response) => {
        JWT.AccessToken = response.data.access;
        JWT.RefreshToken = response.data.refresh;
        
        res.write(JSON.stringify(JWT));
        res.end();
    })
    .catch((error: any) => {
        res.write(error.message);
        res.end();
    }); 
});

routerMain.get('/getCompanyByDomain/:domain', (req, res) => {
    const companyDomain: string = req.params.domain;

    let headersList = {
        "Accept": "*/*",
        "Authorization": req.headers.authorization
       }
    let reqOptions = {
        url: "http://127.0.0.1:8000/api/companies/?format=json&domain=" + companyDomain,
        method: "GET",
        headers: headersList,

    }

    axios.request(reqOptions)
    .then((response) => {
        res.write(JSON.stringify(response.data));
        res.end();
    })
    .catch((error: any) => {
        res.write(error.message);
        res.end();
    });
});

routerMain.get('/getCompanyContacts/:company_id', (req, res) => {
    const companyID: string = req.params.company_id;

    let headersList = {
        "Accept": "*/*",
        "Authorization": req.headers.authorization
       }
    let reqOptions = {
        url: "http://127.0.0.1:8000/api/contacts/?format=json&parent_company=" + companyID,
        method: "GET",
        headers: headersList,

    }

    axios.request(reqOptions)
    .then((response) => {
        res.write(JSON.stringify(response.data));
        res.end();
    })
    .catch((error: any) => {
        res.write(error.message);
        res.end();
    });
});
 
module.exports = routerMain;
