// types/express.d.ts
import { IDecodedToken } from "./auth.interface"; // optional interface for your JWT payload

declare global {
  namespace Express {
    interface Request {
      user?: IDecodedToken; // e.g. { email: string; role: string; iat: number; exp: number }
    }
  }
}
