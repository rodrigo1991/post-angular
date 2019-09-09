import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserDataSource } from './user-datasource';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false})
  private paginator: MatPaginator;

  @ViewChild(MatSort, {static: false})
  private sort: MatSort;

  @ViewChild(MatTable, {static: false})
  private table: MatTable<User>;

  private dataSource: UserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'surname', 'birthdate', 'edit', 'delete'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.userService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(filterValue: string) {
    const datos = this.dataSource.page.data;
    console.log('datos',datos);
    const filtro = filterValue.trim().toLowerCase();
    const filtrados = datos.filter(
      data => data.name.toLowerCase().includes(filtro) || data.surname.toLowerCase().includes(filtro)
    )
    this.dataSource.userSubject.next(filtrados);
    console.log(filtrados);
  }

  onEditClick(user :User){
    console.log(user);
  }

  onDeleteClick(user :User){
    console.log(user);
  }
}
