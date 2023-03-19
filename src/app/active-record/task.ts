import { Entity, EntityBase, Fields, Validators } from 'remult';

@Entity('tasks', { allowApiCrud: true })
export class Task extends EntityBase {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string({
    caption:"task title",
    validate:Validators.required
  })
  title = '';
  @Fields.boolean()
  completed = false;
}
