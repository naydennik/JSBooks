export class RegisterModel {
  constructor(
    public email: string,
    public password: string,
    public confirmpassword: string,
    public firstname: string,
    public lastname: string,
    public age?: number
  ) {}
}
