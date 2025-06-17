import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string | undefined | null): string {

    if (!value) {
      return '';
    }

    const names = value.trim().split(' ');

    if (names.length < 2) {
      return value;
    }

    const firstName = names[0];
    const secondNameInitial = names[1].charAt(0);

    return `${firstName} ${secondNameInitial}.`;
  }

}
