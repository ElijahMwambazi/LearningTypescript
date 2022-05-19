import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  // Fetch data
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  // Save data
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // Update data
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // Create new
      return axios.post(this.rootUrl, data);
    }
  }
}
