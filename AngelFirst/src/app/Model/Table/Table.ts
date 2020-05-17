import { Row } from "./Row";

export class Table {
  id: number
  TableRows: Array<Row>
  constructor() {
    this.TableRows = []
  }
}
