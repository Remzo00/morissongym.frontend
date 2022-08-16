import axios, { AxiosInstance } from "axios";

class Api{
    api: AxiosInstance;
    constructor(){
        this.api = axios.create({baseURL: "https://morrisongym.herokuapp.com/api"}) 
    }
    async fetchCustomers(){
        const response = await this.api.get("/Customer")
        return response.data
    }
    async fetchUsers(){
        const response = await this.api.get("/User")
        return response.data
    }
    async fetchCoachs(){
        const response = await this.api.get("/Coach")
        return response.data
    }    
}
const api = new Api()
Object.freeze(api)

export default api