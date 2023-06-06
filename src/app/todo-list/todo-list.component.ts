import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class  TodoListComponent implements OnInit {
  array = ['Faire du sport', 'Faire à manger'];
  value = '';
  temperature : number;
  isFinished = false;
  @Input() itemInput = 'Input Item';

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
      this.fetch()
  }

  add() {
    this.array.push(this.value)
    this.value ='';
    console.log(this.value)
  }

  remove(todoItem : string){
    // this.array.splice(this.array.indexOf(todoItem), 1)
    this.array = this.array.filter ((item) => item !== todoItem) 
  }

  private fetch(){
    this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m%2Crelativehumidity_2m%2Cwindspeed_10m&fbclid=IwAR1_yFx7Il0p_OByQsj5AJZTLLNgtkIxYu8JC_tzwl__A794-q-rAzZBjCM')
    .subscribe((Weather :any ) => {
       this.temperature = Weather.current_weather.temperature;
       this.isFinished = true;
      })
  }
}
