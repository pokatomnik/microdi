// deno-lint-ignore-file no-explicit-any
import { serviceMapSingleton } from "./ServiceStorage.ts";

export function provide<
  C extends new (...args: Array<any>) => any,
  D extends Array<new (...args: Array<any>) => any>,
>(clazz: C, deps: D): void {
  return serviceMapSingleton.provides(clazz, deps);
}

export function Provide<
  TClass extends new (...args: ReadonlyArray<any>) => any,
>(
  ...depClasses: ConstructorsOf<
    TClass extends
      new (...args: infer TArgs extends ReadonlyArray<any>) => unknown ? TArgs
      : never
  >
) {
  return function (
    Class: TClass,
    _context: ClassDecoratorContext<TClass>,
  ): TClass {
    serviceMapSingleton.provides(Class, Array.from(depClasses));
    return Class;
  };
}

type ConstructorOf<TInstance extends any> = new (
  ...args: ReadonlyArray<any>
) => TInstance;

// deno-fmt-ignore-start
type ConstructorsOf<TInstances extends ReadonlyArray<any>> =
  TInstances extends []
  ? []
  : TInstances extends readonly [infer T1 extends any]
  ? [ConstructorOf<T1>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any, infer T16 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>, ConstructorOf<T16>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any, infer T16 extends any, infer T17 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>, ConstructorOf<T16>, ConstructorOf<T17>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any, infer T16 extends any, infer T17 extends any, infer T18 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>, ConstructorOf<T16>, ConstructorOf<T17>, ConstructorOf<T18>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any, infer T16 extends any, infer T17 extends any, infer T18 extends any, infer T19 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>, ConstructorOf<T16>, ConstructorOf<T17>, ConstructorOf<T18>, ConstructorOf<T19>]
  : TInstances extends readonly [infer T1 extends any, infer T2 extends any, infer T3 extends any, infer T4 extends any, infer T5 extends any, infer T6 extends any, infer T7 extends any, infer T8 extends any, infer T9 extends any, infer T10 extends any, infer T11 extends any, infer T12 extends any, infer T13 extends any, infer T14 extends any, infer T15 extends any, infer T16 extends any, infer T17 extends any, infer T18 extends any, infer T19 extends any, infer T20 extends any]
  ? [ConstructorOf<T1>, ConstructorOf<T2>, ConstructorOf<T3>, ConstructorOf<T4>, ConstructorOf<T5>, ConstructorOf<T6>, ConstructorOf<T7>, ConstructorOf<T8>, ConstructorOf<T9>, ConstructorOf<T10>, ConstructorOf<T11>, ConstructorOf<T12>, ConstructorOf<T13>, ConstructorOf<T14>, ConstructorOf<T15>, ConstructorOf<T16>, ConstructorOf<T17>, ConstructorOf<T18>, ConstructorOf<T19>, ConstructorOf<T20>]
  : never
// deno-fmt-ignore-end
