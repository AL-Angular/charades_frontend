export class Category {
  // tslint:disable-next-line:variable-name
  id: string;
  user_id: string;
  name: string;
  created_at: string;


  // tslint:disable-next-line:variable-name
  constructor(user_id: string, name: string) {
    this.user_id = user_id;
    this.name = name;
  }
}
