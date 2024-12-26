export const verifyToken = (req: any, res: any, next: any) => {
    const SECURITY_BEARER_TOKEN = process.env.SECURITY_BEARER_TOKEN
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ code: 401, message: 'Unauthorized: Not valid security token' });
    }

    if (token !== `Bearer ${SECURITY_BEARER_TOKEN}`) {
        return res.status(403).json({ code: 403, message: 'Forbidden: Not valid security token' });
    }

    next();
};