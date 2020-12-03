import axios from "axios"


const instance = axios.create({
    baseURL: "https://tranquil-springs-28634.herokuapp.com/"
})


export default instance