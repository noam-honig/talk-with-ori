import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Task } from './task';

@Component({
  selector: 'app-active-record',
  templateUrl: './active-record.component.html',
  styleUrls: ['./active-record.component.scss'],
})
export class ActiveRecordComponent implements OnInit {
  constructor() {}
  tasks: Task[] = [];
  newTaskTitle = '';
  ngOnInit(): void {
    this.taskRepo.find().then((t) => (this.tasks = t));
  }
  taskRepo = remult.repo(Task);

  async add() {
    this.tasks.push(await this.taskRepo.insert({ title: this.newTaskTitle }));
  }
  async save(task: Task) {
    await this.taskRepo.save(task);
  }
}
