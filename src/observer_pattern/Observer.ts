export default abstract class Observer {
  public abstract update(entity: any, eventName: string, args?: any[]); // entity: Subject
}
