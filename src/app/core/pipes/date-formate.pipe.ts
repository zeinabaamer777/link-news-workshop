import { Pipe, PipeTransform } from '@angular/core';
import { format } from "date-fns";

@Pipe({
  name: 'dateFormate'
})
export class DateFormatePipe implements PipeTransform {

  transform(value: string, formate: string): string {
    return value ? format(new Date(value), formate) : "";
  }
}
