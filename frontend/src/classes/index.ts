export class Passenger {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  passportNo: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.dateOfBirth = undefined;
    this.passportNo = "";
  }
}

export class Search {
  from?: string;
  to?: string;
  date?: Date;
  passengers?: number;
  price?: string;

  constructor() {
    this.from = this.to = this.date = this.passengers = this.price = undefined;
  }
}
