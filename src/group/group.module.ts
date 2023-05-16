import { MongooseModule } from '@nestjs/mongoose';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupSchema } from '../../tools/models/group.model';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [GroupService],
})
export class GroupModule {}
