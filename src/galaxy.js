export class GalaxyAge {
  constructor(year) {
    this.year = year;
    this.expectancy = 80;
    this.yearsLeft = this.expectancy - this.year;
    this.yearsOver = this.year - this.expectancy;
    this.mercuryAge = +(year / 0.24).toFixed(2);
    this.venusAge = +(year / 0.62).toFixed(2);
    this.marsAge = +(year / 1.88).toFixed(2);
    this.jupiterAge = +(year / 11.86).toFixed(2);
    this.mercuryLeft = 0;
    this.venusLeft = 0;
    this.marsLeft = 0;
    this.jupiterLeft = 0;
    this.mercuryOver = 0;
    this.venusOver = 0;
    this.marsOver = 0;
    this.jupiterOver = 0;
  }

  lifeCalc() {
    if (this.year <= this.expectancy) {
      this.mercuryLeft = +(this.yearsLeft / 0.24).toFixed(2);
      this.venusLeft = +(this.yearsLeft / 0.62).toFixed(2);
      this.marsLeft = +(this.yearsLeft / 1.88).toFixed(2);
      this.jupiterLeft = +(this.yearsLeft / 11.86).toFixed(2);
    } else (this.year > this.expectancy)
      this.mercuryOver = +(this.yearsOver / 0.24).toFixed(2);
      this.venusOver = +(this.yearsOver / 0.62).toFixed(2);
      this.marsOver = +(this.yearsOver / 1.88).toFixed(2);
      this.jupiterOver = +(this.yearsOver / 11.86).toFixed(2);
  }
}
