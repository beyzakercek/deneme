import { RoleModel } from '../models/role.model';
import { GroupModel } from '../models/group.model';

export class UserCreateDto {
  name: string;
  surname: string;
  password: string;
  email: string;
  birthDay: Date;
}
export class UserUpdateDto {
  name: string;
  surname: string;
  password: string;
  email: string;
  birthDay: Date;
  roles: RoleModel[];
  groups: GroupModel[];
}

export class UserLoginDto {
  email: string;
  password: string;
}
