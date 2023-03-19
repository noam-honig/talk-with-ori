import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import {
  DataAreaSettings,
  GridSettings,
} from '../common-ui-elements/interfaces';
import { Person } from './person';

@Component({
  selector: 'app-demo-data-control',
  templateUrl: './demo-data-control.component.html',
  styleUrls: ['./demo-data-control.component.scss'],
})
export class DemoDataControlComponent implements OnInit {
  constructor() {}
  repo = remult.repo(Person);
  person = this.repo.create();
  dataArea = new DataAreaSettings({
    fields: () => [
      this.person.$.firstName,
      this.person.$.lastName,
      [this.person.$.city, this.person.$.country],
    ],
  });
  dataGrid = new GridSettings(this.repo, {
    allowCrud: true,
  });
  ngOnInit(): void {}
  async save() {
    await this.person.save();
  }
}
