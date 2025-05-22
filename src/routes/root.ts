import { Router } from 'express';
import { ApplicationInfo } from '../application/main'; 

const routerRoot = Router();

routerRoot.get('/', (req, res) => {
    const applicationInfo = new ApplicationInfo();

    res.type('.html');
    res.write(`<html><head><title>${applicationInfo.name}</title></head><body style="font-family: monospace; font-size: large;">`);
    res.write(`<b><u>${applicationInfo.name.toLocaleUpperCase()} ${applicationInfo.version}</b></u>`);
    res.write('<br>');
    res.write(`🛠️ ${applicationInfo.developed_by}`);
    res.write('<br>');
    res.write(`${applicationInfo.copyright}`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`💾 ${applicationInfo.osVersion} environment`);
    res.write('<br>');
    res.write(`💻 ${applicationInfo.osComputerName} (${applicationInfo.osComputerFreeMem})`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`<a href="/v1/getSampleEntity/">Sample Call</a>`);
    res.write('<br>');
    res.write(`<a href="/v1/getSampleEntityWithSecurity/">Sample Call With Security</a>`);
    res.write('<br>');
    res.write(`</body></html>`);
    res.end();
});

module.exports = routerRoot;