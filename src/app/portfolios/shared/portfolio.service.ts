import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

    constructor() { }

    portfolios = [
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
        firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer' },
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
        firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer' },
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
        firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer' },
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
        firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer' },
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/celeb-photos-19.jpg',
        firstName: 'Petar', lastName: 'Georgiev', age: 31, profession: 'civil engineer' },
        { imgUrl: 'http://portra.wpshower.com/wp-content/uploads/2014/03/000112.jpg',
        firstName: 'George', lastName: 'Clooney', age: 35, profession: 'software engineer' }
    ];

    getAll() {
        return this.portfolios;
    }

}
