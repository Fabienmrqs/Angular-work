import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-exo-angular',
  templateUrl: './exo-angular.component.html',
  styleUrls: ['./exo-angular.component.css']
})
export class ExoAngularComponent {
  array = ['First item arr', 'Second item arr', 'Third item arr']
 

  value = ''

  addItem(){
    this.array.push(this.value);

    console.log(this.value)
    this.value= '';
  }
}
