import Player from "./Player";

export default class World {
  private entities: Player[];

  constructor() {
    this.entities = [];
  }

  public addPlayer(id, position, speed, health) {
    const player = new Player(id, position, speed, health);
    this.entities.push(player);
    // World subscribes to Player updates.
    player.stateStore.subscribe(() => console.log(`update ${player.id}`, player.stateStore.getState()));
  }

  public getPlayer(id): Player | undefined {
    return this.entities.find(entity => entity.id === id);
  }

  run() {
    this.getPlayer("a")?.move();
    this.getPlayer("a")?.move();
  }
}
