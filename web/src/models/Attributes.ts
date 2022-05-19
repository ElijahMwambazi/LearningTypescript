export class Attributes<T> {
  constructor(private data: T) {}

  // Retrieve data
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  // Set data
  set(update: T): void {
    Object.assign(this.data, update);
  }
}
