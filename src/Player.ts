import {combineReducers, createStore, Store} from "redux";
import {healthReducer, positionReducer} from "./reducers";

export default class Player {
  public id: string;
  public speed: number = 0;
  private position: {x: number, y: number } = { x: 0, y: 0 };
  public stateStore: Store<{ type: string; position: { x: number; y: number }; speed: number, health: number }>;

  constructor(id: string, position: {x: number, y: number}, speed: number, health: number) {
    this.id = id;
    this.stateStore = createStore(combineReducers({position: positionReducer, health: healthReducer}));
    this.stateStore.dispatch({type: "INIT_POSITION", position, speed, health});
    this.stateStore.dispatch({type: "INIT_HEALTH", amount: health});
    this.position = position;
    this.speed = speed;
  }

  public move() {
    this.stateStore.dispatch({ type: 'MOVE_UP', position: this.position, speed: this.speed })
  }
}
