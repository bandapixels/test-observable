import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store/store";
import {
  getTemperature,
  getAirPressure,
  getHumidity
} from "../dashboard.selectors";
import * as acts from "../dashboard.actions";

const Dashboard: React.FunctionComponent = () => {
  const temperature = useSelector((state: AppState) => getTemperature(state));
  const airPressure = useSelector((state: AppState) => getAirPressure(state));
  const humidity = useSelector((state: AppState) => getHumidity(state));
  const dispatch = useDispatch();

  dispatch(acts.startObserve());

  return (
    <>
      <div>{`Temperature: ${temperature}`}</div>
      <div>{`Air pressure: ${airPressure}`}</div>
      <div>{`Humidity: ${humidity}`}</div>
    </>
  );
};

export default Dashboard;
