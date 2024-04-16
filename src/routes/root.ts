import { Router } from 'express';
import { ApplicationInfo } from '../application/applicationInfo'; 

const routerRoot = Router();

//ROOT
routerRoot.get('/', (req, res) => {
    const app = new ApplicationInfo();
    
    res.type('.html');
    res.write(`<html><head><title>${app.name}</title></head><body style="font-family: monospace; font-size: large;">`);
    res.write(`<b><u>${app.name.toLocaleUpperCase()} ${app.version}</b></u>`);
    res.write('<br>');
    res.write(`🛠️ ${app.developed_by}`);
    res.write('<br>');
    res.write(`🗒️ ${app.copyright} 1989 - ${new Date().getFullYear()}.`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`💾 ${app.osVersion} environment`);
    res.write('<br>');
    res.write(`💻 ${app.osComputerName} (${app.osComputerFreeMem})`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`<a href="/v1/getSampleEntity/">Sample Call</a>`);
    res.write('<br>');
    res.write(`<a href="/v1/markMailAsCommercialRequest/id=1">Sample Call 2</a>`);
    res.write(`</body></html>`);
    res.end();
});

module.exports = routerRoot;