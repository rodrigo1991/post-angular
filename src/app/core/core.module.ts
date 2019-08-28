
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatSidenavModule, 
  MatIconModule,
  MatListModule, 
  MatInputModule, 
  MatSelectModule,
  MatRadioModule, 
  MatCardModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';



@NgModule({

  declarations: [
    MainNavComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MainNavComponent
  ],
})
export class CoreModule { }
