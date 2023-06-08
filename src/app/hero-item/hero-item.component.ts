import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent {

 @Input() hero : any;
 @Output() clickHero = new EventEmitter<any>();

 emitEvent(heroOutput : any) {
  this.clickHero.emit(heroOutput)
}
}
