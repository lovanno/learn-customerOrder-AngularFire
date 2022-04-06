import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], column: any, direction: string) {
    let multiplier = 1;

    if (direction == 'desc') {
      multiplier = -1;
    }

    /*These blocks sort the list by rearranging indexes thanks to the .sort() method. */
    if (list !== undefined && list !== null) {
      list.sort((a, b) => {

        if (a[column] > b[column]) {
          return 1 * multiplier;    /*If b is greater than a, it will come first and return 1. */
        }
        if (a[column] < b[column]) {
          return -1 * multiplier; /*The multipler reverses the values to descend*/
        }

        return 0;
      })
    }
    return list
  }


}
