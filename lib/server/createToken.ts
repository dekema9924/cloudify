

import jwt from 'jsonwebtoken';


export default function createToken(userId: string) {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
    }
    const token = jwt.sign({ _id: userId }, secret, { expiresIn: '1h' });
    return token;
}