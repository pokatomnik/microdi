interface GenericConstructor {
  new (...args: Array<unknown>): unknown;
}

export class ServicesMap {
  private readonly classes = new Map<
    GenericConstructor,
    Array<GenericConstructor>
  >();

  private readonly instances = new Map<GenericConstructor, unknown>();

  // deno-lint-ignore no-explicit-any
  public provides<T extends Array<any>>(
    service: { new (...args: T): unknown },
    // deno-lint-ignore no-explicit-any
    deps: Array<{ new (...args: Array<any>): unknown }>
  ) {
    this.classes.set(service as GenericConstructor, deps);
  }

  // deno-lint-ignore no-explicit-any
  public resolve<C extends new (...args: Array<any>) => unknown>(
    Service: C
  ): InstanceType<C> {
    const instantiatedService = this.instances.get(
      Service as GenericConstructor
    );
    if (instantiatedService) return instantiatedService as InstanceType<C>;

    const serviceDeps = this.classes.get(Service as GenericConstructor);

    if (!serviceDeps) {
      throw new Error("Some deps were not registered");
    }

    const depsInstances = serviceDeps.map((Dependency) => {
      return this.resolve(Dependency);
    });

    const newInstance = new Service(...depsInstances);
    this.instances.set(Service as GenericConstructor, newInstance);

    return newInstance as InstanceType<C>;
  }
}

export const serviceMapSingleton = new ServicesMap();
