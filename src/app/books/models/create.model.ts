export class CreateModel {
  public id: string;
  constructor(
    public author: string,
    public description: string,
    public imageUrl: string,
    public isbn: string,
    public pages: number,
    public published: string,
    public publisher: string,
    public subtitle: string,
    public title: string,
    public website: string
  ) {}
}
