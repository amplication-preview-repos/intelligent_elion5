import { Role } from "../role/Role";

export type Permission = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  role?: Role | null;
  updatedAt: Date;
};
