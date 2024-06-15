import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
