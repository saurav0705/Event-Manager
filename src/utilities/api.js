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

export const sendMessage = (data,cb) => {
    fetch(BASE_ADMIN_URL+"contact",{method:'POST',headers: { "Content-Type": "application/json"}, body:JSON.stringify(data)})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => {cb(resp);}).catch(err => cb({"message":"invalid Credential"}))
}

export const getMessages = (cb) => {
    fetch(BASE_ADMIN_URL+"contact",{method:'GET',headers: { "Content-Type": "application/json",'Authorization':'Bearer '+localStorage.getItem('token')}})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json();})
        .then(resp => cb(resp)).catch(err => cb({"message":"invalid Credential"}))
}

export const deleteMessage = (data,cb) => {
    fetch(BASE_ADMIN_URL+"contact",{method:'DELETE',headers: { "Content-Type": "application/json",'Authorization':'Bearer '+localStorage.getItem('token')}, body:JSON.stringify(data)})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => {cb(resp);}).catch(err => cb({"message":"invalid Credential"}))
}


export const getUser = (cb) => {
    fetch(BASE_ADMIN_URL+"admin/id",{method:'GET',headers: { "Content-Type": "application/json",'Authorization':'Bearer '+localStorage.getItem('token')}})
       .then(resp => {if(resp.status === 401){throw resp};return resp.json()})
        .then(resp => cb(resp)).catch(err => {console.log(err);cb({"message":"invalid Credential"})})
}

export const getEventsUser = (cb) => {
    fetch(BASE_ADMIN_URL+"event",{method:'GET',headers: { "Content-Type": "application/json",'Authorization':'Bearer '+localStorage.getItem('token')}})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => cb(resp)).catch(err => cb({"message":"invalid Credential"}))
}
export const deleteEvent = (data,cb) => {
    fetch(BASE_ADMIN_URL+"event",{method:'DELETE',headers: { "Content-Type": "application/json",'Authorization':'Bearer '+localStorage.getItem('token')}, body:JSON.stringify(data)})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => {cb(resp);}).catch(err => cb({"message":"invalid Credential"}))
}

export const registerUser = (data,cb) => {
    fetch(BASE_ADMIN_URL+"registration",{method:'POST',body:data,mimetype:"multipart/form-data"})
       .then(resp => {if(resp.status === 401){throw resp.status};return resp.json()})
        .then(resp => cb(resp)).catch(err => cb({"message":"invalid Credential"}))
    
}
