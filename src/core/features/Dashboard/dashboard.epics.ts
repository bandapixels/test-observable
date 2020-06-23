import { ActionsObservable, combineEpics, ofType } from "redux-observable";
import { Action } from "redux";
import { interval, of } from "rxjs";
import {
  catchError,
  debounceTime,
  distinct,
  mapTo,
  mergeMap,
  timeout
} from "rxjs/operators";
import * as acts from "./dashboard.actions";

export const epicTemperature = (action$: ActionsObservable<Action>) => {
  const time = Math.floor(Math.random() * 2000) + 100;

  return action$.pipe(
    ofType(acts.DashboardActions.START_OBSERVE),
    mergeMap(() =>
      interval(time).pipe(
        debounceTime(100),
        mapTo(
          acts.updateTemperatureAct(String(Math.floor(Math.random() * 50 + 1)))
        ),
        distinct()
      )
    ),
    timeout(1000),
    catchError(() => of(acts.updateTemperatureAct("N/A")))
  );
};

export const epicAirPressure = (action$: ActionsObservable<Action>) => {
  const time = Math.floor(Math.random() * 2000) + 100;

  return action$.pipe(
    ofType(acts.DashboardActions.START_OBSERVE),
    mergeMap(() =>
      interval(time).pipe(
        debounceTime(100),
        mapTo(
          acts.updateAirPressureAct(String(Math.floor(Math.random() * 50 + 1)))
        ),
        distinct()
      )
    ),
    timeout(1000),
    catchError(() => of(acts.updateAirPressureAct("N/A")))
  );
};

export const epicHumidity = (action$: ActionsObservable<Action>) => {
  const time = Math.floor(Math.random() * 2000) + 100;

  return action$.pipe(
    ofType(acts.DashboardActions.START_OBSERVE),
    mergeMap(() =>
      interval(time).pipe(
        debounceTime(100),
        mapTo(
          acts.updateHumidityAct(String(Math.floor(Math.random() * 50 + 1)))
        ),
        distinct()
      )
    ),
    timeout(1000),
    catchError(() => of(acts.updateHumidityAct("N/A")))
  );
};

export default combineEpics(epicTemperature, epicAirPressure, epicHumidity);
