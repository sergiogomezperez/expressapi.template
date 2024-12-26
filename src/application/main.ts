import 'dotenv/config';
import os from 'os';

export class ApplicationInfo {
    name: String;
    version: String;
    description: String;
    developed_by: String;
    copyright: String;
    osVersion: String;
    osComputerName: String;
    osComputerFreeMem: String;
    emailVerifierBaseURL: String;
    emailVerifierToken: String;
    securityType: String;

    constructor() {
        this.name = process.env.APP_NAME || '';
        this.version = process.env.APP_VERSION || '';
        this.description = process.env.APP_DESCRIPTION || '';
        this.developed_by = process.env.APP_DEVELOPED_BY || '';
        this.copyright = (process.env.APP_COPYRIGHT || '') + new Date().getFullYear();
        this.osVersion = os.version() + " " + os.arch() + " " + os.release();
        this.osComputerName = os.hostname();
        this.osComputerFreeMem = (os.freemem() / 1024 / 1024).toFixed(2) + " GB. / " + (os.totalmem() / 1024 / 1024).toFixed(2) + " GB.";
        this.emailVerifierBaseURL = process.env.EMAIL_VERIFIER_BASEURL || '';
        this.emailVerifierToken = process.env.EMAIL_VERIFIER_ || '';
        this.securityType = process.env.SECURITY_TYPE || '';
    }
}
