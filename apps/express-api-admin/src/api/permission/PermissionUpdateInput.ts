import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionUpdateInput = {
  description?: string | null;
  name?: string | null;
  role?: RoleWhereUniqueInput | null;
};
