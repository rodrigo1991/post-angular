import { Group } from './group.model';

export interface User {
  id: number;
  group: Group;
  name: string;
  surname: string;
  birthdate: Date;
  created: Date;
  modified: Date;
}