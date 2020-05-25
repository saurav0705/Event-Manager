import axios from 'axios';
const BASE_ADMIN_URL = "https://hackstack.herokuapp.com/";

const checkResponse = (response) => {
    if(response.status === 200){
        return response.data;
    }else{
        return {error:"error occured"}
    }
}

export const getEvents = (callback) => {
    axios.get(BASE_ADMIN_URL+"event/all")
          .then(response => callback(checkResponse(response)))
}

export const getLogin = (data,cb) => {
    fetch(BASE_ADMIN_URL+"admin/login",{method:'POST',headers: { "Content-Type": "application/json"}, body:JSON.stringify(data)})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => cb(resp)).catch(err => cb({"message":"invalid Credential"}))
}
