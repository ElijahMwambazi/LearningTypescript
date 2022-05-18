import axios, { AxiosResponse } from "axios";

interface UserProperties {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: "male" | "female";
  email?: string;
  phoneNumber?: number;
}

type PropertyName = [string, number];
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProperties) {}

  // Retrieve user data
  get(propertyName: string): PropertyName {
    return this.data[propertyName];
  }

  // Set user data
  set(update: UserProperties): void {
    Object.assign(this.data, update);
  }

  // Register user events
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // Trigger user events
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback): void => {
      callback();
    });
  }

  // Fetch user data
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  // Save user data
  save(): void {
    const id = this.get("id");

    if (id) {
      // Update user data
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // Create new user
      axios.post("http://localhost:3000/users/", this.data);
    }
  }
}
