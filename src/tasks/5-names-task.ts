// 5

// Требуется подобрать соответствующие названия переменным, функциям, методам и тд...

type Callback<T> = (event: T) => void;

class Publisher<T> {
  private subscribers = new Set<Callback<T>>();

  subscribe(c: Callback<T>) {
    this.subscribers.add(c);

    return c;
  }

  unsubscribe(c: Callback<T>) {
    return this.subscribers.delete(c);
  }

  deliver(message: T) {
    for (const subscribe of this.subscribers) {
      subscribe(message);
    }
  }
}

const publisher = new Publisher<number>();

const subscribe = publisher.subscribe((message) => {
  console.log(message);
});

publisher.deliver(5);

publisher.unsubscribe(subscribe);

publisher.deliver(10);
