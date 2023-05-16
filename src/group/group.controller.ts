import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupCreateDto } from '../../tools/dtos/group.dto';
import { GroupModel } from '../../tools/models/group.model';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  async createGroup(@Body() body: GroupCreateDto): Promise<GroupModel> {
    return await this.groupService.create(body);
  }

  @Get()
  async getAllGroups(): Promise<GroupModel[]> {
    return await this.groupService.findAll();
  }

  @Get(':id')
  async getGroup(@Param() params): Promise<GroupModel> {
    return await this.groupService.findOne(params.id);
  }

  @Put(':id')
  async updateGroup(
    @Param('id') id: string,
    @Body() groupDto: GroupCreateDto,
  ): Promise<GroupModel> {
    return this.groupService.update(id, groupDto);
  }

  @Delete(':id')
  async removeGroup(@Param('id') id: string): Promise<GroupModel> {
    return this.groupService.delete(id);
  }
}
