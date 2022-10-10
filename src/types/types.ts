export type User = {
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};
export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  startDate: Date;
  endDate: Date;
};
export type Coach = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};
export type Login = {
  username: string;
};
export type Register = {
  userCode: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
};
