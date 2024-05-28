const bcrypt = require("bcrypt");

export async function verifyPassword(password: string, hash: string)
{
    hash = hash.replace(/^\$2y(.+)$/i, "$2a$1");

    return new Promise(function(resolve, reject) {
        bcrypt.compare(password, hash, function(err: any, result: boolean) {
            if (!err) {
                resolve(result);
            } else {
                reject();
            }
        });
    });
}
