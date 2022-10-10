import { ServicesMap } from "./ServiceStorage.ts";
import { Testing } from "./deps.ts";

Deno.test("Resolve a simple Service", () => {
  const servicesMap = new ServicesMap();

  class Foo {
    val = 0;
    public foo() {
      ++this.val;
    }
  }

  servicesMap.provides(Foo, []);

  const resolvedFoo0 = servicesMap.resolve(Foo);

  resolvedFoo0.foo();

  const resolvedFoo1 = servicesMap.resolve(Foo);

  Testing.assertInstanceOf(
    resolvedFoo0,
    Foo,
    "Resolved instance must be of instance type Foo"
  );

  Testing.assertStrictEquals(
    resolvedFoo0,
    resolvedFoo1,
    "Resolved services must be equal"
  );

  Testing.assertStrictEquals(
    resolvedFoo0.val,
    resolvedFoo1.val,
    "Primitives must be equal"
  );
});

Deno.test("Resolve a service with one dependency", () => {
  const servicesMap = new ServicesMap();

  class Foo {
    foo() {
      return "foo";
    }
  }

  servicesMap.provides(Foo, []);

  class Bar {
    public constructor(public readonly foo: Foo) {}
  }

  servicesMap.provides(Bar, [Foo]);

  const bar0 = servicesMap.resolve(Bar);

  Testing.assertInstanceOf(
    bar0,
    Bar,
    "Resolved instance must be of instance type Bar"
  );

  Testing.assertInstanceOf(
    bar0.foo,
    Foo,
    "resolved instance must be of instance type Foo"
  );

  const bar1 = servicesMap.resolve(Bar);

  Testing.assertInstanceOf(
    bar1,
    Bar,
    "Resolved instance must be of instance type Bar"
  );

  Testing.assertInstanceOf(
    bar1.foo,
    Foo,
    "resolved instance must be of instance type Foo"
  );

  Testing.assertStrictEquals(bar0, bar1);
});

Deno.test("Complex resolve", () => {
  const servicesMap = new ServicesMap();

  class A {
    a() {
      return "a";
    }
  }
  servicesMap.provides(A, []);

  class B {
    b() {
      return "b";
    }
  }
  servicesMap.provides(B, []);

  class C {
    constructor(public readonly a: A, public readonly b: B) {}
  }
  servicesMap.provides(C, [A, B]);

  class D {
    constructor(public readonly c: C) {}
  }
  servicesMap.provides(D, [C]);

  const d0 = servicesMap.resolve(D);

  Testing.assertInstanceOf(d0, D);
  Testing.assertInstanceOf(d0.c, C);
  Testing.assertInstanceOf(d0.c.a, A);
  Testing.assertInstanceOf(d0.c.b, B);

  const d1 = servicesMap.resolve(D);

  Testing.assertStrictEquals(d0, d1);
  Testing.assertStrictEquals(d0.c, d1.c);
  Testing.assertStrictEquals(d0.c.a, d1.c.a);
  Testing.assertStrictEquals(d0.c.b, d1.c.b);

  const c = servicesMap.resolve(C);

  Testing.assertEquals(d0.c, c);
});
