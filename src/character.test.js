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
});
