import { PermissionCreateNestedManyWithoutRolesInput } from "./PermissionCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
};
