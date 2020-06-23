import { DashboardState } from "./dashboard.state";
import * as acts from "./dashboard.actions";

const initialState: DashboardState = {
  temperature: "0",
  airPressure: "0",
  humidity: "0"
};

const reducer = (state = initialState, action: any): DashboardState => {
  switch (action.type) {
    case acts.DashboardActions.UPDATE_TEMPERATURE:
      const {
        payload: { temperature }
      } = action;

      return {
        ...state,
        temperature
      };
    case acts.DashboardActions.UPDATE_AIR_PRESSURE:
      const {
        payload: { airPressure }
      } = action;

      return {
        ...state,
        airPressure
      };
    case acts.DashboardActions.UPDATE_HUMIDITY:
      const {
        payload: { humidity }
      } = action;

      return {
        ...state,
        humidity
      };
    default:
      return state;
  }
};

export default reducer;
