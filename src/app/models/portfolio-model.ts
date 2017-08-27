export class Portfolio {

    constructor(portfolio: any) {
        this.id = portfolio.id;
        this.imgUrl = portfolio.imgUrl;
        this.firstName = portfolio.firstName;
        this.lastName = portfolio.lastName;
        this.age = portfolio.age;
        this.profession = portfolio.profession;
        this.rating = portfolio.rating;
        this.interests = portfolio.interests;
        this.workingExperience = portfolio.workingExperience;
        this.languages = portfolio.languages;
        this.projects = portfolio.projects;
        this.hobbies = portfolio.hobbies;
        this.additionalInfo = portfolio.additionalInfo;
    }
    id: number;
    imgUrl: string;
    firstName: string;
    lastName: string;
    age: number;
    profession: string;
    rating: number;
    interests: string[];
    workingExperience: number;
    languages: string[];
    projects: string[];
    hobbies: string[];
    additionalInfo: string;
}
