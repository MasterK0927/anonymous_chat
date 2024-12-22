import { AES, enc } from 'crypto-js';

export const encryptMessage = (message, key) => {
  return AES.encrypt(message, key).toString();
};

export const decryptMessage = (encryptedMessage, key) => {
  return AES.decrypt(encryptedMessage, key).toString(enc.Utf8);
};
