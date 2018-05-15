export interface LoginData {
  auth: AuthData;
}

interface AuthData {
  user: string;
  password: string;
}
