export class Page<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  pageCount: number;

  constructor() {
    this.data = [];
  }
}
