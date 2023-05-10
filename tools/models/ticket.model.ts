import { TicketTypeModel } from './ticket-type.model';
import { UserModel } from './user.model';
import { ActivityModel } from './activity.model';
import { InventoryModel } from './inventory.model';

export class TicketModel {
  id: string;
  name: string;
  description: string;
  type: TicketTypeModel;
  responsible: UserModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
