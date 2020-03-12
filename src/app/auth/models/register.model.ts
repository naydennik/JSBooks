export class RegisterModel {
  constructor(
    public username: string,
    public password: string,
    public confirmpassword: string,
    public firstname: string,
    public lastname: string,
    public email: string
  ) {}
}
