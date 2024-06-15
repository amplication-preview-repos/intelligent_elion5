import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionCreateInput = {
  description?: string | null;
  name?: string | null;
  role?: RoleWhereUniqueInput | null;
};
