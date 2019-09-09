import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/index/user.component';
import { MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule} from '@angular/material';
import { ProgressSpinnerComponent } from 'src/app/shared/components/progress-spinner/progress-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';


@NgModule({
  declarations: [UserComponent, ProgressSpinnerComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
