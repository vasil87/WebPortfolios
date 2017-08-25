import { Portfolio } from './portfolio';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

    portfolios = [
        {
            id: 1, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        },
        {
            id: 2, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        },
        {
            id: 3, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        },
        {
            id: 4, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        },
        {
            id: 5, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        },
        {
            id: 6, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer',
            rating: 8.5, interests: ['tennis', 'movies'], workingExperience: 5, languages: ['English, Deutch'],
            projects: ['Angular 4', 'Node.js'], hobbies: ['tennis', 'diving', 'dreaming'], additionalInfo: 'some additional info about me'
        }
    ];

    getAll(): Promise<Portfolio[]> {
        return Promise.resolve(this.portfolios);
    }

    getPortfolio(id: number): Promise<Portfolio> {
        return this.getAll()
            .then(portfolios => portfolios.find(portfolio => portfolio.id === id));
    }
}
