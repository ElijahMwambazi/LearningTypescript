type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

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
}
