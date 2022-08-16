import CryptoJS from 'crypto-js';
import cookie from 'cookie';

const { AUTH_SECRET_KEY = 'secret_key' } = process.env;

export const getAccessToken = (headersCookies: string): string | null => {
  const cookies = cookie.parse(headersCookies || '');

  const accessTokenCrypt = cookies['@sauterTimeSheet/accessToken'];

  if (accessTokenCrypt) {
    const bytes = CryptoJS.AES.decrypt(accessTokenCrypt, AUTH_SECRET_KEY);

    const accessTokenDecrypt = bytes.toString(CryptoJS.enc.Utf8);

    return accessTokenDecrypt;
  }

  return null;
};

// export const cryptAccessToken = (data: string): string => {
//   const tokenCrypt = CryptoJS.AES.encrypt(data, AUTH_SECRET_KEY).toString();

//   const token = cookie.serialize("@sauterTimeSheet/accessToken", tokenCrypt, {
//     httpOnly: true,
//     maxAge: 60 * 60 * 5,
//     sameSite: "strict",
//     path: "/",
//   });

//   return token;
// };

// export const getTypeUser = (headersCookies: string): string | null => {
//   const cookies = cookie.parse(headersCookies || "");
//   const typeUser = cookies["@sauterTimeSheet/TypeUser"];

//   if (typeUser) {
//     const bytes = CryptoJS.AES.decrypt(typeUser, AUTH_SECRET_KEY);
//     const accessTypeUser = bytes.toString(CryptoJS.enc.Utf8);
//     return accessTypeUser;
//   }

//   return null;
// };

// export const cryptTypeUser = (data: string): string => {
//   const typeUserCrypt = CryptoJS.AES.encrypt(data, AUTH_SECRET_KEY).toString();

//   const typeUser = cookie.serialize(
//     "@sauterTimeSheet/TypeUser",
//     typeUserCrypt,
//     {
//       httpOnly: true,
//       maxAge: 60 * 60 * 5,
//       sameSite: "strict",
//       path: "/",
//     }
//   );

//   return typeUser;
// };
