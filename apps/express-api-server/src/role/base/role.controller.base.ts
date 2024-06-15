/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RoleService } from "../role.service";
import { RoleCreateInput } from "./RoleCreateInput";
import { Role } from "./Role";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleWhereUniqueInput } from "./RoleWhereUniqueInput";
import { RoleUpdateInput } from "./RoleUpdateInput";
import { PermissionFindManyArgs } from "../../permission/base/PermissionFindManyArgs";
import { Permission } from "../../permission/base/Permission";
import { PermissionWhereUniqueInput } from "../../permission/base/PermissionWhereUniqueInput";

export class RoleControllerBase {
  constructor(protected readonly service: RoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Role })
  async createRole(@common.Body() data: RoleCreateInput): Promise<Role> {
    return await this.service.createRole({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Role] })
  @ApiNestedQuery(RoleFindManyArgs)
  async roles(@common.Req() request: Request): Promise<Role[]> {
    const args = plainToClass(RoleFindManyArgs, request.query);
    return this.service.roles({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async role(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    const result = await this.service.role({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRole(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() data: RoleUpdateInput
  ): Promise<Role | null> {
    try {
      return await this.service.updateRole({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Role })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRole(
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Role | null> {
    try {
      return await this.service.deleteRole({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/permissions")
  @ApiNestedQuery(PermissionFindManyArgs)
  async findPermissions(
    @common.Req() request: Request,
    @common.Param() params: RoleWhereUniqueInput
  ): Promise<Permission[]> {
    const query = plainToClass(PermissionFindManyArgs, request.query);
    const results = await this.service.findPermissions(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        role: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/permissions")
  async connectPermissions(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        connect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/permissions")
  async updatePermissions(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        set: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/permissions")
  async disconnectPermissions(
    @common.Param() params: RoleWhereUniqueInput,
    @common.Body() body: PermissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      permissions: {
        disconnect: body,
      },
    };
    await this.service.updateRole({
      where: params,
      data,
      select: { id: true },
    });
  }
}
