import { serviceMapSingleton } from "./ServiceStorage.ts";

export function provide<
  C extends new (...args: Array<unknown>) => unknown,
  D extends Array<new (...args: Array<unknown>) => unknown>
>(clazz: C, deps: D): void {
  return serviceMapSingleton.provides(clazz, deps);
}
