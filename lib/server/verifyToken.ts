
import Jwt from "jsonwebtoken";

interface DecodedUser {
    _id: string;
    iat: number;
    exp: number;
}


export const VerifyToken = async (token: string) => {
    if (!token) throw new Error('Unauthorized');


    try {
        const decodedUser = Jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
        if (!decodedUser) throw new Error('Unauthorized');
        return decodedUser;
    } catch (err) {
        throw new Error('Unauthorized');
    }
}

