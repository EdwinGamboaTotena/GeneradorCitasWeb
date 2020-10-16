import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'boleanToString'
})
export class BooleanStringPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? 'Si' : 'No';
    }
}