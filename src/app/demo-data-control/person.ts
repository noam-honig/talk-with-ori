import { Entity, Fields, IdEntity, Validators } from 'remult';

@Entity('person', {
  allowApiCrud: true,
})
export class Person extends IdEntity {
  @Fields.string({ validate: Validators.required })
  firstName = '';
  @Fields.string({ validate: Validators.required })
  lastName = '';
  @Fields.string({ validate: Validators.required, caption: 'עיר' })
  city = '';
  @Fields.string({ validate: Validators.required })
  country = '';
  @Fields.dateOnly()
  birthDate = new Date();
}
