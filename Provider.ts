import { serviceMapSingleton } from "./ServiceStorage.ts";

export function provide<
  // deno-lint-ignore no-explicit-any
  C extends new (...args: Array<any>) => unknown,
  // deno-lint-ignore no-explicit-any
  D extends Array<new (...args: Array<any>) => unknown>
>(clazz: C, deps: D): void {
  return serviceMapSingleton.provides(clazz, deps);
}
