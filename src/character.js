export class Character {
  constructor() {
    this.health = 1000;
  }

  getHealth() {
    return this.health;
  }

  getLevel() {
    return 1;
  }

  isAlive() {
    return true;
  }

  attack(defender, damage) {
    defender.health -= damage;
  }
}
