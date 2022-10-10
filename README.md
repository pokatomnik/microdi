```
            S
M i c r o D I
          a M
          m P
          n L
            E
```

## Very Simple Dependency Injection library for [Deno](https://deno.land)

### tldr:
Provide a service:
```typescript
import { provide } from 'https://deno.land/x/microdi/Provider.ts';

class ServiceFoo {
    public foo() {
        console.log('Foo!');
    }
}
provide(
    // The service you'd like to provide
    ServiceFoo,
    // Service dependencies (i.e. other services)
    []
);

class ServiceBar {
    public bar() {
        console.log('Bar!');
    }
}
provide(ServiceBar, []);

class ServiceFooBar {
    public constructor(
        private readonly foo: ServiceFoo,
        private readonly bar: ServiceBar
    ) {}
}
provide(ServiceFooBar, [Foo, Bar]);

class App {
    public constructor(fooBar: ServiceFooBar) {}
}
provide(App, [[ServiceFooBar]]);

const app = resolve(App); // App!
```

### Features:
- Lazy initialization: services are being instantiated on the fly on demand.
- You can use a scope for your services. Just do the following:
```typescript
import { ServicesMap } from 'https://deno.land/x/microdi/ServiceStorage.ts';
const servicesMap = new ServicesMap();
class Foo {}
servicesMap.provides(Foo, []);
```

### Limitations:
- Cyclic dependencies are not supported.
- This library can instantiate services as a singletons only.

### Tests:
```
$ deno test
```