import { Router } from 'express';
import { ApplicationInfo } from '../application/applicationInfo'; 

const routerRoot = Router();

//ROOT
routerRoot.get('/', (req, res) => {
    res.type('.html');
    res.write(`<html><head><title>${ApplicationInfo.appName}</title></head><body style="font-family: monospace; font-size: large;">`);
    res.write(`<b><u>${ApplicationInfo.appName.toLocaleUpperCase()} ${ApplicationInfo.version}</b></u>`);
    res.write('<br>');
    res.write(`🛠️ ${ApplicationInfo.developed_by}`);
    res.write('<br>');
    res.write(`🗒️ ${ApplicationInfo.copyright} 1989 - ${new Date().getFullYear()}.`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`💾 ${ApplicationInfo.osVersion} environment`);
    res.write('<br>');
    res.write(`💻 ${ApplicationInfo.osComputerName} (${ApplicationInfo.osComputerFreeMem})`);
    res.write('<br>');
    res.write(`<hr>`);
    res.write(`<a href="/v1/getSampleEntity/">Sample Call</a>`);
    res.write(`<br>`);
    res.write(`<a href="/v1/getExpectedArrivals/">Call getExpectedArrivals</a>`);
    res.write(`</body></html>`);
    res.end();
});

module.exports = routerRoot;