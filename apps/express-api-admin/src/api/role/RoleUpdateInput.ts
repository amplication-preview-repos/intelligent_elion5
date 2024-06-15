import { PermissionUpdateManyWithoutRolesInput } from "./PermissionUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  permissions?: PermissionUpdateManyWithoutRolesInput;
};
