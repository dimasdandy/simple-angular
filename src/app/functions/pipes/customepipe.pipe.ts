import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe'
})
export class CustomepipePipe implements PipeTransform {

  transform(value: number)
  {
    return value*2;
  }

}
