import { Role } from "./Role";

export interface User {
  id?: number;
  role: Role;
  username: string;
  created_at: string;
  address: string;
}
