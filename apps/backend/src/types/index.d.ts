import { User } from "./user";
export {};

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
