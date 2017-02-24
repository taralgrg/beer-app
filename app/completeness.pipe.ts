import {Pipe, PipeTransform} from '@angular/core';
import {Tracker} from './tracker.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Tracker[], desiredCompleteness) {


    var output: Tracker[] = [];
    if(desiredCompleteness === "morethan500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500 ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "lessthan500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500 ) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
