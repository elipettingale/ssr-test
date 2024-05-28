'use server'

import { mongodb } from "@/lib/database";
import { generateAccessToken, verifyPassword } from "@/lib/helpers";
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
        user: user
    }
}
