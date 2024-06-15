import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "name";

export const PermissionTitle = (record: TPermission): string => {
  return record.name?.toString() || String(record.id);
};
