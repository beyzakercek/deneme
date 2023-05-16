import { UserCreateDto, UserUpdateDto } from '../../tools/dtos/user.dto';
import { UserModel } from '../../tools/models/user.model';
import { AuditModel } from '../../tools/models/audit.model';
import { Model } from 'mongoose';
//butun crud operasyonlarini tek bir servis uzerinden yonetebilmek icin burda topladim
export class ResourceService<T, C, U> {
  constructor(protected readonly mongoModel: Model<T>) {}

  async create(model: C): Promise<T> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Admin';
    audit.createdDate = new Date();

    const createdModel = new this.mongoModel({ ...model, ...audit }); //iki modeli birleştirip oluşturduk

    return await createdModel.save();
  }

  async findAll(): Promise<T[]> {
    return await this.mongoModel.find().exec(); //usermongodaki her şey gelcek
  }

  async findOne(id: string): Promise<T> {
    return await this.mongoModel.findOne({ _id: id }).exec(); //_id kolonundaki gelen id değerine göre değerlri dönecek
  }

  async delete(id: string): Promise<T> {
    return await this.mongoModel.findByIdAndRemove({ _id: id }).exec();
  }

  async update(id: string, dto: U): Promise<T> {
    let newModel = this.mongoModel.findOne({ _id: id }).exec();
    newModel = { ...newModel, ...dto };
    return await this.mongoModel
      .findByIdAndUpdate(id, newModel, { new: true })
      .exec();
  }
}
