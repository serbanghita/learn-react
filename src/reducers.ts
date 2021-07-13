interface IPositionState {
  position: { x: number, y: number };
  speed: number;
}

interface IPositionReducerProps {
  type: string;
  position: { x: number, y: number };
  speed: number;
}

export function positionReducer(state: IPositionState, action: IPositionReducerProps) {

  // action.type @@redux/INIT
  if (typeof state === "undefined") {
    state = { position: { x: 0, y: 0 }, speed: 0 };
  }

  switch(action.type) {
    case "INIT_POSITION":
      return { ...state, position: { x: action.position.x, y: action.position.y }, speed: action.speed };
    case "MOVE_UP":
        return { ...state, position: { x: state.position.x - action.speed, y: state.position.y }, speed: action.speed };
    case "MOVE_DOWN":
        return { ...state, position: { x: state.position.x + action.speed, y: state.position.y }, speed: action.speed };
    case "MOVE_LEFT":
        return { ...state, position: { x: state.position.x, y: state.position.y + action.speed }, speed: action.speed };
    case "MOVE_RIGHT":
        return { ...state, position: { x: state.position.x, y: state.position.y - action.speed }, speed: action.speed };
    default:
      return state;
  }
}

interface IHealthState {
  health: number;
}

interface IHealthReducerProps {
  type: string;
  amount: number;
}

export function healthReducer(state: IHealthState, action: IHealthReducerProps) {

  // action.type @@redux/INIT
  if (typeof state === "undefined") {
    state = { health: 0 };
  }

  switch (action.type) {
    case "INIT_HEALTH":
      return { ...state, health: action.amount};
    case "HIT":
      return { ...state, health: state.health - action.amount};
    case "GAIN":
      return { ...state, health: state.health - action.amount};
    default:
      return state;
  }
}
