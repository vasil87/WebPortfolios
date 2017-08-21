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

    if (sort === 'age') {
      if (order === 'ascending') {
        portfolios.sort(compareAge);
      } else {
        portfolios.sort(compareAge).reverse();
      }
    }
    return portfolios;
  }

}
