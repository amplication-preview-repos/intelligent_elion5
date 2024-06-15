import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
};
