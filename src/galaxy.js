export class GalaxyAge {
  constructor(year) {
    this.year = year;
    this.mercuryAge = +(year / 0.24).toFixed(2);
  }
}
