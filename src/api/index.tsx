import axios, { AxiosInstance } from "axios";
import { Coach, Customer, Login, Register } from "../types/types";
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
  async getCustomers() {
    const response: ServerResponse<ApiDataResponse<Customer[]>> =
      await this.api.get("/Customer");
    return response.data;
  }
  async addCustomer(params: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    startDate: Date;
    endDate: Date;
  }) {
    const response: ServerResponse<ApiDataResponse<Customer[]>> =
      await this.api.post("/Customer", { ...params });
    return response.data;
  }
  async updateCustomer(params: {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    startDate?: Date;
    endDate?: Date;
  }) {
    const response: ServerResponse<ApiDataResponse<Customer[]>> =
      await this.api.put("/Customer", { ...params });
    return response.data;
  }
  async deleteCustomer(id: number) {
    const response: ServerResponse<ApiDataResponse<Customer[]>> =
      await this.api.delete(`/Customer?id=${id}`);
    return response.data;
  }

  async getUsers() {
    const response = await this.api.get("/User");
    return response.data;
  }
  async getCoachs() {
    const response: ServerResponse<ApiDataResponse<Coach[]>> =
      await this.api.get("/Coach");
    return response.data;
  }

  async addCoach(params: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    user: any;
  }) {
    const response: ServerResponse<ApiDataResponse<Coach[]>> =
      await this.api.post("/Coach", { ...params });
    return response.data;
  }
  async updateCoach(params: {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    user?: any;
  }) {
    const response: ServerResponse<ApiDataResponse<Coach[]>> =
      await this.api.put("/Coach", { ...params });
    return response.data;
  }
  async deleteCoach(id: number) {
    const response: ServerResponse<ApiDataResponse<Coach[]>> =
      await this.api.delete(`/Coach?id=${id}`);
    return response.data;
  }
  async postLogin({ username }: { username: string }) {
    const response: ServerResponse<ApiDataResponse<Login>> =
      await this.api.post("/Auth/Login", { username });
    return response.data;
  }
  async postRegister({
    userCode,
    firstName,
    lastName,
    email,
    roleId,
  }: {
    userCode: string;
    firstName: string;
    lastName: string;
    email: string;
    roleId: number;
  }) {
    const response: ServerResponse<ApiDataResponse<Register>> =
      await this.api.post("/Auth/Register", {
        userCode,
        firstName,
        lastName,
        email,
        roleId,
      });
    return response.data;
  }
}
const api = new Api();
Object.freeze(api);

export default api;
