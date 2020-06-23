export enum DashboardActions {
  START_OBSERVE = "[Dashboard] start observe",
  UPDATE_TEMPERATURE = "[Dashboard] update temperature",
  UPDATE_AIR_PRESSURE = "[Dashboard] update air pressure",
  UPDATE_HUMIDITY = "[Dashboard] update humidity"
}

export const startObserve = () => {
  return { type: DashboardActions.START_OBSERVE };
};

export const updateTemperatureAct = (
  temperature: string
): { type: string; payload: {} } => {
  return {
    type: DashboardActions.UPDATE_TEMPERATURE,
    payload: { temperature }
  };
};

export const updateAirPressureAct = (
  airPressure: string
): { type: string; payload: {} } => {
  return {
    type: DashboardActions.UPDATE_AIR_PRESSURE,
    payload: { airPressure }
  };
};

export const updateHumidityAct = (
  humidity: string
): { type: string; payload: {} } => {
  return { type: DashboardActions.UPDATE_HUMIDITY, payload: { humidity } };
};
