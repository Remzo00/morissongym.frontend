import axios, { AxiosInstance } from "axios";
import { Coach, Login } from "../types/types";
import { ApiDataResponse } from "./types";

class Api {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: "https://morrisongym.herokuapp.com/api",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async fetchCustomers() {
    const response = await this.api.get("/Customer");
    return response.data;
  }
  async fetchUsers() {
    const response = await this.api.get("/User");
    return response.data;
  }
  async fetchCoachs() {
    const response: ServerResponse<ApiDataResponse<Coach[]>> =
      await this.api.get("/Coach", {
        headers: {
          Authorization: `DARIS${localStorage.getItem("token")}`,
        },
      });
    return response.data;
  }
  async getLogin({ username }: { username: string }) {
    const response: ServerResponse<ApiDataResponse<Login>> =
      await this.api.post("/Auth/Login", { username });
    return response.data;
  }
}
const api = new Api();
Object.freeze(api);

export default api;
