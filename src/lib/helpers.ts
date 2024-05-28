const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function verifyPassword(password: string, hash: string) {
  hash = hash.replace(/^\$2y(.+)$/i, "$2a$1");

  return new Promise(function (resolve, reject) {
    bcrypt.compare(password, hash, function (err: any, result: boolean) {
      if (!err) {
        resolve(result);
      } else {
        reject();
      }
    });
  });
}

export async function getCurrentUserID(auth_token: string) {
  return new Promise(function (resolve, reject) {
    jwt.verify(
      auth_token,
      process.env.JWT_SECRET,
      (err: any, { id }: { id: string }) => {
        if (!err) {
          resolve(id);
        } else {
          reject();
        }
      }
    );
  });
}

export const generateAccessToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1800s",
  });
};
