import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, tap } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { PaginationRequest } from 'src/app/shared/model/pagination-request';
import { Page } from 'src/app/shared/model/page';

/**
 * Data source for the Tabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserDataSource extends DataSource<User> {
  userSubject = new BehaviorSubject<User[]>([]);
  page: Page<User> = new Page();
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor(private userService: UserService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<User[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.userSubject),
      this.paginator.page,
      this.sort.sortChange
    ];


    merge(...dataMutations).pipe(
      tap(() => this.getData())
      )
    .subscribe();
    return this.userSubject.asObservable();
  }

  disconnect() {}

  private getData(): void {
    const pr = new PaginationRequest();
    if (this.sort.active && this.sort.direction !== '') {
      pr.sort = `${this.sort.active},${this.sort.direction.toUpperCase()}`;
    }
    pr.limit = this.paginator.pageSize.toString();
    pr.page = (this.paginator.pageIndex + 1).toString();

    this.userService.getUsers(pr).subscribe(
      page => {
        this.userSubject.next(page.data);
        this.page = page;
      }
    );
  }
}
