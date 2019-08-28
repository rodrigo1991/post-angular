import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';


@NgModule({
  declarations: [UserComponent, ProgressSpinnerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class UserModule { }
