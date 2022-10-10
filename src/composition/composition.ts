export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  speedUp(): void {
    this.engine.speedUp();
  }

  toStop(): void {
    this.engine.toStop();
  }

  turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is turn on...');
  }

  speedUp(): void {
    console.log('Engine is speed up...');
  }

  toStop(): void {
    console.log('Engine is stopped ...');
  }

  turnOff(): void {
    console.log('Engine is Off...');
  }
}

const car = new Car();

car.turnOn();
car.speedUp();
car.toStop();
car.turnOff();
