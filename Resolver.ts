import { serviceMapSingleton } from "./ServiceStorage.ts";

export function resolve<C extends new (...args: Array<unknown>) => unknown>(
  clazz: C
): InstanceType<C> {
  return serviceMapSingleton.resolve(clazz);
}
