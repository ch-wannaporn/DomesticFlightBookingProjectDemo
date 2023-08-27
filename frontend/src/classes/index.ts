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
