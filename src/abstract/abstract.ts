export abstract class Character {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected strike: number,
    protected life: number,
  ) {}

  attack(character: Character): void {
    this.shout();
    character.losingLife(this.strike);
  }
  losingLife(hit: number): void {
    this.life -= hit;
    console.log(`${this.emoji} - ${this.name} now has ${this.life} life … ..`);
  }
  abstract shout(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1f9DD}';

  shout(): void {
    console.log(this.emoji + ' Warrior to attack');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  shout(): void {
    console.log(this.emoji + ' Moooooooooooonster ');
  }
}

const monster = new Monster('monster', 100, 1000);
const warrior = new Warrior('warrior', 100, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
