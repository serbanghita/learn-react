import Observer from "./Observer";

export default abstract class Subject {
  protected observers: Observer[] = [];

  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    const found = this.observers.indexOf(observer);
    if (found !== -1) {
      this.observers.splice(found, 1);
    }
  }

  public removeObservers() {
    this.observers = [];
  }

  public notify(eventName: string, ...args: any[]) {
    this.observers.forEach((observer) => {
      observer.update(this, eventName, ...args);
    });
  }
}
