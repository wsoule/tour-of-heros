import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Windstorm', power: 'Conjures some big ass wind', alterEgo: 'Albert Macho'},
  { id: 2, name: 'Fatboy', power:'The name says it all. He is fat.'},
  { id: 3, name: 'Magnetic Man', power: 'Magneto rip off. Does what magneto does'},
  { id: 4, name: 'Repulsor', power: 'Just like me with women, Repulsor pushes things away from her'},
  { id: 5, name: 'Numba 5'},
  { id: 6, name: 'Numba 6'},
  { id: 7, name: 'Numba 7'},
  { id: 8, name: 'Numba 8'},
  { id: 9, name: 'Numba 9'},
  { id: 10, name: 'Numba 10'}
]

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}!</h2>
  
  <p>Heroes:</p>
  <ul class="heroes">
  <li *ngFor="let hero of heroes" 
  [class.selected]="hero === chosenHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <hero-detail [hero]="chosenHero"></hero-detail>
  `
})
export class AppComponent  { 
  name = 'Angular'; 
  title = 'Tour of Heros';
  heroes = HEROES;
  myHero = this.heroes[1];
  chosenHero: Hero;
  onSelect(hero: Hero): void{
    this.chosenHero = hero;
  }
}
