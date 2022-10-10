import { serviceMapSingleton } from "./ServiceStorage.ts";

// deno-lint-ignore no-explicit-any
export function resolve<C extends new (...args: Array<any>) => unknown>(
  clazz: C
): InstanceType<C> {
  return serviceMapSingleton.resolve(clazz);
}
