import { Injectable } from '@nestjs/common';
import { ResourceService } from '../../libs/services/resource.service';
import { GroupModel } from '../../tools/models/group.model';
import { GroupCreateDto } from '../../tools/dtos/group.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GroupService extends ResourceService<
  GroupModel,
  GroupCreateDto,
  GroupCreateDto
> {
  constructor(@InjectModel('Group') groupMongo: Model<GroupModel>) {
    super(groupMongo);
  }
}
