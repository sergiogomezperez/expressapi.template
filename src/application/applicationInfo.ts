import 'dotenv/config';
import os from 'os';

export class ApplicationInfo {
    static port: String;
    static appName: String;
    static version: String;
    static description: String;
    static developed_by: String;
    static copyright: String;
    static osVersion: String;
    static osComputerName: String;
    static osComputerFreeMem: String;
    
    static initializeFromEnvFile() {
        this.port = process.env.PORT || '3099';
        this.appName = process.env.APP_NAME || '';
        this.version = process.env.APP_VERSION || '';
        this.description = process.env.APP_DESCRIPTION || '';
        this.developed_by = process.env.APP_DEVELOPED_BY || '';
        this.copyright = process.env.APP_COPYRIGHT || '';
        this.osVersion = `${os.version()} ${os.arch()} ${os.release()}`;
        this.osComputerName = os.hostname();
        this.osComputerFreeMem = `${(os.freemem() / 1024 / 1024).toFixed(2)}GB. / ${(os.totalmem() / 1024 / 1024).toFixed(2)}GB.`;
    };

    static initializeFromDB() {
        throw new Error('Method not implemented.');
    };

    static initializeFromSystemEnvironment() {
        throw new Error('Method not implemented.');
    };
}