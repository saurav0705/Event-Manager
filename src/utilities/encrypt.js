import SimpleCrypto from "simple-crypto-js";
let code = new SimpleCrypto('eventHandler');

export  const encrypt = (obj) => {
    return code.encrypt(JSON.stringify(obj));
}

export const decrypt = (str) => {
    return JSON.parse(code.decrypt(str));
}