import { Permission } from "../permission/Permission";

export type Role = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  permissions?: Array<Permission>;
  updatedAt: Date;
};
