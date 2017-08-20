import { Portfolio } from './portfolio';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

    constructor() { }

    portfolios = [
        {
            id: 1, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer'
        },
        {
            id: 2, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer'
        },
        {
            id: 3, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer'
        },
        {
            id: 4, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer'
        },
        {
            id: 5, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
            firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer'
        },
        {
            id: 6, imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
            firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer'
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
