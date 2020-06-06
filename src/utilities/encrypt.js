import SimpleCrypto from "simple-crypto-js";
let code = new SimpleCrypto('eventHandler');

export  const encrypt = (obj) =>  code.encrypt(JSON.stringify(obj));

export const decrypt = (str) => JSON.parse(code.decrypt(str))