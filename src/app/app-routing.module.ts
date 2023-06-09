import { CommonUIElementsModule } from 'common-ui-elements';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users.component';
import { AdminGuard } from './users/AdminGuard';
import { ShowDialogOnErrorErrorHandler } from './common/UIToolsService';
import { terms } from './terms';
import { ActiveRecordComponent } from './active-record/active-record.component';
import { DemoDataControlComponent } from './demo-data-control/demo-data-control.component';

const defaultRoute = terms.home;
const routes: Routes = [
  { path: defaultRoute, component: HomeComponent },
  { path: 'active-record', component: ActiveRecordComponent },
  { path: 'demo-data-control', component: DemoDataControlComponent },
  {
    path: terms.userAccounts,
    component: UsersComponent,
    canActivate: [AdminGuard],
  },
  { path: '**', redirectTo: '/' + defaultRoute, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonUIElementsModule],
  providers: [
    AdminGuard,
    { provide: ErrorHandler, useClass: ShowDialogOnErrorErrorHandler },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
