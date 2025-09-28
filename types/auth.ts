export interface UserRegisterErrorsType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

export interface UserSignInErrorsType {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  status: string;
}
