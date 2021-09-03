export class GalaxyAge {
  constructor(year) {
    this.year = year;
    this.mercuryAge = +(year / 0.24).toFixed(2);
    this.venusAge = +(year / 0.62).toFixed(2);
    this.marsAge = +(year / 1.88).toFixed(2);
    this.jupiterAge = +(year / 11.86).toFixed(2);
  }
}
