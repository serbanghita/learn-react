import Player from "./Player";
import {Unsubscribe} from "redux";

export default class World {
  private entities: Player[];
  private listeners: { playerId: string, listenerFn: Unsubscribe };

  constructor() {
    this.entities = [];
    this.listeners = Object.create(null);
  }

  public addPlayer(id, position, speed, health) {
    const player = new Player(id, position, speed, health);
    this.entities.push(player);
    this.subscribeToPlayer(player);
  }

  private subscribeToPlayer(player: Player) {
    // World subscribes to Player updates.
    const playerListener = player.stateStore.subscribe(() => console.log(`update ${player.id}`, player.stateStore.getState()));
    // Save the listener so we can unsub later.
    this.listeners[player.id] = playerListener;
  }

  private unsubscribeToPlayer(player: Player) {
    this.listeners[player.id]();
    delete this.listeners[player.id];
  }

  public getPlayer(id): Player {
    const player = this.entities.find(entity => entity.id === id);
    if (!player) {
      throw new Error(`No player found with id: ${id}`);
    }

    return player;
  }

  run() {
    const p1 = this.getPlayer("p1");
    const p2 = this.getPlayer("p2");

    p1.move();
    p1.move();

    p2.move();
    this.unsubscribeToPlayer(p2)

    p2.move();
  }
}
