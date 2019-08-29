import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule } from '@angular/material';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';


@NgModule({
  declarations: [UserComponent, ProgressSpinnerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ]
})
export class UserModule { }
