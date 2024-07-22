import { Key } from "react";

export type User = {
    _id: Key;
    name: String;
    email: String;
};

export type Thing = {
    _id: Key;
    user_id: String;
    name: String;
    description: String;
};
