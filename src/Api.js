import axios from "axios";

const api = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/posts"
});

export default api;