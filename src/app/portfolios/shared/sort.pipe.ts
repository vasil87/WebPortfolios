import { Portfolio } from './portfolio';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(portfolios: Portfolio[], filter: string[]): Portfolio[] {

    const sort = filter[0];
    const order = filter[1];

    function compareAge(a, b) {
      return a.age - b.age;
    }

    function compareRating(a, b) {
      return a.rating - b.rating;
    }

    function compareWorkingExperience(a, b) {
      return a.workingExperience - b.workingExperience;
    }

    if (sort === 'age') {
      if (order === 'ascending') {
        portfolios.sort(compareAge);
      } else {
        portfolios.sort(compareAge).reverse();
      }
    }

    if (sort === 'rating') {
      if (order === 'ascending') {
        portfolios.sort(compareRating);
      } else {
        portfolios.sort(compareRating).reverse();
      }
    }

    if (sort === 'workingExperience') {
      if (order === 'ascending') {
        portfolios.sort(compareWorkingExperience);
      } else {
        portfolios.sort(compareWorkingExperience).reverse();
      }
    }
    return portfolios;
  }

}
