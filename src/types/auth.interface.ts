// types/auth.interface.ts
export interface IDecodedToken {
  email: string;
  role: string;
  iat: number;
  exp: number;
}
