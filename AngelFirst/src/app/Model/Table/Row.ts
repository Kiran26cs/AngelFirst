import { Element } from "./Element";

export class Row {
  id: number
  cells: Array<Element>
  constructor() {
    this.cells = []
  }
}
