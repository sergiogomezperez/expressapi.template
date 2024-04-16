import crypto from 'crypto';
import { ClassifiedMail, authenticate, syncAllModels } from './models';
import { AxiosError } from 'axios';
import { hasSubscribers } from 'diagnostics_channel';

export const getDatabaseInfo = () => {
    return {
        DATABASE_NAME: process.env.GRAPH_DATABASE_NAME,
        DATABASE_USER: process.env.GRAPH_DATABASE_USER,
        DATABASE_PASSWORD: process.env.GRAPH_DATABASE_PASSWORD,
        DATABASE_SERVER: process.env.GRAPH_DATABASE_SERVER,
        DATABASE_DIALECT: process.env.GRAPH_DATABASE_DIALECT
    };
}

export const createClassifiedMail = (reqMail: any, isCommercialRequest: boolean = true) => {
    const newClassifiedMail = ClassifiedMail.build({
        id: crypto.randomUUID(),
        sentDateTime: reqMail.createdDateTime,
        is_inbound: true,
        subject: reqMail.subject,
        from: reqMail.sender,
        toRecipients: reqMail.to,
        ccRecipients: reqMail.cc,
        bccRecipients: reqMail.bcc,
        body: reqMail.body,
        isCommercialRequest: isCommercialRequest,
    });

    newClassifiedMail.save();

    return newClassifiedMail;
};

export const setClassifiedMailMail = (pClassifiedMailID: string, isCommercialRequest: boolean) => {
    ClassifiedMail.update(
        {
            isCOmmercialRequest: isCommercialRequest,
        },
        {
            where: {
                id: pClassifiedMailID,
            },
        }
    );
};

export const getClassifiedMails = () => {
    return ClassifiedMail.findAll();
};

export const getClassifiedMail = (pClassifiedMailID: string) => {
    return ClassifiedMail.findAll({
        where: { id: pClassifiedMailID },
    });
};

export { authenticate, syncAllModels };