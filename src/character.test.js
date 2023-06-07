import { Character } from "./character.js";
import { describe, expect, it } from "vitest";

describe("Character", () => {
  it("starts with 1000 health points", () => {
    const character = new Character();
    expect(character.getHealth()).toBe(1000);
  });

  it("starts with level 1", () => {
    const character = new Character();
    expect(character.getLevel()).toBe(1);
  });

  it("starts alive", () => {
    const character = new Character();

    expect(character.isAlive()).toBe(true);
  });

  it("recives damage when attacked", () => {
    const attacker = new Character();
    const defender = new Character();
    attacker.attack(defender, 80);
    expect(defender.getHealth()).toBe(920);
  });
});

it("when health becomes 0, the character dies", () => {
  const attacker = new Character();
  const defender = new Character();

  attacker.attack(defender, 1000);
  expect(defender.getHealth()).toBe(0);
});
