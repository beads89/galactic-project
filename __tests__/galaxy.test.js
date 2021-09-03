import { GalaxyAge } from "../src/galaxy";

// Need tests for: 
// Displaying age in Earth years then convert to Mercury, Venus, Mars, Jupiter
// Displaying a base life expectancy(75, 80, 90, 100?)
// Display remaining life expectancy for Earth and converting to other planets
// Display how many years over life expectancy someone has lived(yay)

describe("GalaxyAge", () => {
    let age;
    beforeEach(() => {
      age = new GalaxyAge(5);
    });

    test("it should show age in earth years", () => {
    expect(age.year).toEqual(5);
  });

    test("it should convert Earth age to Mercury age", () => {
      expect(age.mercuryAge).toEqual(20.83);
    })
})