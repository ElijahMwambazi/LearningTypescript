import { Model } from "./Model";

export interface UserProps {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {}
