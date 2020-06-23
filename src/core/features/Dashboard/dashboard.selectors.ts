import { AppState } from "../../store/store";

export const getTemperature = ({
  dashboardReducer: { temperature }
}: AppState): string => temperature;

export const getAirPressure = ({
  dashboardReducer: { airPressure }
}: AppState): string => airPressure;

export const getHumidity = ({
  dashboardReducer: { humidity }
}: AppState): string => humidity;
