import axios from 'axios';
const BASE_ADMIN_URL = "https://hackstack.herokuapp.com/";

const checkResponse = (response) => {
    console.log(response.status);
    if(response.status === 200){
        return response.data;
    }else{
        return {error:"error occured"}
    }
}

export const getEvents = (callback) => {
    axios.get(BASE_ADMIN_URL+"events")
          .then(response => callback(checkResponse(response)))
}
