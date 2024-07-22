'use server'

import mongodb from "@/lib/mongodb";
import { User } from "@/lib/types";
import Things from "@/models/Things";

export async function storeThingForUser(data: FormData, user: User) {
    await mongodb();

    const thing = await Things.create({
        user_id: user._id,
        name: data.get('name'),
        description: data.get('description'),
    });

    return {
        success: true,
        thing: JSON.parse(JSON.stringify(thing))
    }
}

export async function getThingsForUser(user: User) {
    await mongodb();

    const things = await Things.find({
        user_id: user._id
    });

    return {
        success: true,
        things: JSON.parse(JSON.stringify(things))
    }
}
