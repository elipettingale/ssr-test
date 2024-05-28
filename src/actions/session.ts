'use server'

import { mongodb } from "@/lib/database";
import { verifyPassword } from "@/lib/helpers";
import Users from "@/models/Users";

export async function login(state: any, data: FormData) {
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

    return {
        success: true
    }
}
