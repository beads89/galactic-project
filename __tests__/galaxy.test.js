import { GalaxyAge } from "../src/galaxy";

// Need tests for: 
// Displaying age in Earth years then convert to Mercury, Venus, Mars, Jupiter
// Displaying a base life expectancy(80)
// Display remaining life expectancy for Earth and converting to other planets
// Display how many years over life expectancy someone has lived(yay)

describe("GalaxyAge", () => {
    let age;
    beforeEach(() => {
      age = new GalaxyAge(5);
    });

    test("it should show age in Earth years", () => {
    expect(age.year).toEqual(5);
  });

    test("it should convert Earth age to Mercury age", () => {
      expect(age.mercuryAge).toEqual(20.83);
    });

    test("it should convert Earth age to Venus age", () => {
      expect(age.venusAge).toEqual(8.06);
    });

    test("it should convert Earth age to Mars age", () => {
      expect(age.marsAge).toEqual(2.66);
    });

    test("it should convert Earth age to Jupiter age", () => {
      expect(age.jupiterAge).toEqual(0.42);
    });

    test("it should show life expectancy", () => {
      expect(age.expectancy).toEqual(80);
    });

    test("it should show how many Earth years someone is expected to have left to live", () => {
      expect(age.yearsLeft).toEqual(75);
    });

    test("it should show how many Earth years over life expectancy someone has lived", () => {
      let age = new GalaxyAge(90)
      expect(age.yearsOver).toEqual(10);
    });

    test("it should show how many years someone is expected to have left to live on a planet other than Earth", () => {
      age.lifeCalc();
      expect(age.mercuryLeft).toEqual(312.5);
    });

    test("it should show how many years over life expectancy someone has lived in another planet", () => {
      let age = new GalaxyAge(90);
      age.lifeCalc();
      expect(age.mercuryOver).toEqual(41.67);
    });

    test("it should show how many years over life expectancy someone has lived in another planet", () => {
      let age = new GalaxyAge(90);
      age.lifeCalc();
      expect(age.venusOver).toEqual(16.13);
    });
})