import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
 heroes = [{
  id : 0, name:  'Batman'},
  {
    id : 1, name:  'Superman'},
    {
      id : 2, name:  'Iron-man'},
]

showHeroName(hero : any) {
  console.log(hero.name)
 }
}