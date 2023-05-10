import { TicketTypeModel } from '../models/ticket-type.model';
import { ActivityModel } from '../models/activity.model';
import { UserModel } from '../models/user.model';
import { InventoryModel } from '../models/inventory.model';

export class TicketCreateDto {
  name: string;
  description: string;
  type: TicketTypeModel;
  responsible: UserModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
