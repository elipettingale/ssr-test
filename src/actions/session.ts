'use server'

import { mongodb } from "@/lib/database";
import { generateAccessToken, getCurrentUserID, verifyPassword } from "@/lib/helpers";
import Users from "@/models/Users";
import { cookies } from 'next/headers'

export async function login(data: FormData) {
    await mongodb();

    const user = await Users.findOne({
        email: data.get('email')
    });

    if (!user) {
        return {
            success: false,
            error: 'Email Not Found'
        }
    }

    let verified = await verifyPassword(data.get('password') as string, user.password);

    if (!verified) {
        return {
            success: false,
            error: 'Incorrect Password'
        }
    }

    const auth_token = generateAccessToken(user._id);
    cookies().set('auth_token', auth_token);

    return {
        success: true,
        user: JSON.parse(JSON.stringify(user))
    }
}

export async function getCurrentUser() {
    const auth_token = cookies().get('auth_token');

    if (!auth_token) {
        return null;
    }

    const id = await getCurrentUserID(auth_token.value);

    const user = await Users.findOne({
        _id: id
    });

    return JSON.parse(JSON.stringify(user));
}
