export class PaginationRequest {
  page: string;
  limit: string;
  sort: string;
  join: string[];

  constructor(){
    this.join = []
  }
}
