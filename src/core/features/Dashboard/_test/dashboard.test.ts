import { TestScheduler } from "rxjs/testing";
import * as acts from "../dashboard.actions";
import { expect } from "chai";

const assertDeepEqual = (actual: any, expected: any) => {
  expect(actual).deep.equal(expected);
};

describe("Epic tests", () => {
  let testScheduler = new TestScheduler(assertDeepEqual);

  test("Temperature success case", () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot("-a", {
        a: acts.updateTemperatureAct("10")
      });

      // @ts-ignore
      const output$ = action$;

      expectObservable(output$).toBe("-a", {
        a: {
          type: acts.DashboardActions.UPDATE_TEMPERATURE,
          payload: { temperature: "10" }
        }
      });
    });
  });

  test("Temperature failed case", () => {
    setTimeout(() => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const action$ = hot("-b", {
          b: acts.updateTemperatureAct("3")
        });

        // @ts-ignore
        const output$ = action$;

        expectObservable(output$).toBe("-b", {
          b: {
            type: acts.DashboardActions.UPDATE_TEMPERATURE,
            payload: { temperature: "N/A" }
          }
        });
      });
    }, 1001);
  });
});
