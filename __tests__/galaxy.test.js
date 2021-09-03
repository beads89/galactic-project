import { GalaxyAge } from "../src/galaxy";

// Need tests for: 
// Displaying age in Earth years then convert to Mercury, Venus, Mars, Jupiter
// Displaying a base life expectancy(75, 80, 90, 100?)
// Display remaining life expectancy for Earth and converting to other planets
// Display how many years over life expectancy someone has lived(yay)

describe("GalaxyAge", () => {
  test("it should show age in earth years", () => {
    let age = new GalaxyAge(5);
    expect(age.year).toEqual(5);
  })
})