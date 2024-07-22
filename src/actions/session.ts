'use server'

import mongodb from "@/lib/mongodb";
import { generateAccessToken, getCurrentUserID, verifyPassword } from "@/lib/auth";
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
    cookies().set('foo', 'bar');

    return {
        success: true,
        user: JSON.parse(JSON.stringify(user))
    }
}

export async function logout() {
    cookies().delete('auth_token');
    return true;
}

export async function getCurrentUser() {
    const auth_token = cookies().get('auth_token');

    if (!auth_token) {
        return null;
    }

    const id = await getCurrentUserID(auth_token.value);

    await mongodb();

    const user = await Users.findOne({
        _id: id
    });

    if (user) {
        return JSON.parse(JSON.stringify(user));
    }

    return null;
}

export async function userIsAuthenticated() {
    return cookies().get('auth_token') !== undefined;
}
