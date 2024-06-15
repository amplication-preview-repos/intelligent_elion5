import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type PermissionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
