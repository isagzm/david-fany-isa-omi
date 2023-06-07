import { Character } from "./character.js";
import { describe, expect, it } from "vitest";

describe("Character", () => {
  it("starts with 1000 health points", () => {
    const character = new Character();
    expect(character.getHealth()).toBe(1000);
  });
});
