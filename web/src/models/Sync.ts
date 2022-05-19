import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  // Fetch user data
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  // Save user data
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // Update user data
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // Create new user
      return axios.post(this.rootUrl, data);
    }
  }
}
