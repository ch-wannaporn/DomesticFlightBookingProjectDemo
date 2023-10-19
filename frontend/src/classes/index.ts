export class Passenger {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  passportNo?: string;
  isValid: boolean;
  errors: {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    passportNo?: string;
  };

  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.isValid = false;
    this.errors = {};
  }

  validate() {
    const date = new Date();

    this.isValid = false;
    this.errors = {};

    if (!this.firstName) this.errors.firstName = "First name is required.";

    if (!this.lastName) this.errors.lastName = "Last name is required.";

    if (!this.dateOfBirth)
      this.errors.dateOfBirth = "Date of birth is required.";

    if (
      this.dateOfBirth &&
      date.getFullYear() - new Date(this.dateOfBirth).getFullYear() < 0
    )
      this.errors.dateOfBirth = "Age should be equal or more than 0.";

    if (!this.passportNo) this.errors.passportNo = "Passport No. is required.";

    this.isValid = !Object.values(this.errors).some((err) => err);
  }
}

export class Search {
  from?: string;
  to?: string;
  date?: Date;
  passengers?: number;
  price?: string;
}

export class Payment {
  name?: string;
  card?: string;
  code?: string;
  month?: number;
  year?: number;
  bookingId: string;

  constructor(bookingId: string) {
    this.bookingId = bookingId;
  }
}
