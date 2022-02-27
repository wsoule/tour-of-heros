"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var HEROES = [
    { id: 1, name: 'Windstorm', power: 'Conjures some big ass wind', alterEgo: 'Albert Macho' },
    { id: 2, name: 'Fatboy', power: 'The name says it all. He is fat.' },
    { id: 3, name: 'Magnetic Man', power: 'Magneto rip off. Does what magneto does' },
    { id: 4, name: 'Repulsor', power: 'Just like me with women, Repulsor pushes things away from her' },
    { id: 5, name: 'Numba 5' },
    { id: 6, name: 'Numba 6' },
    { id: 7, name: 'Numba 7' },
    { id: 8, name: 'Numba 8' },
    { id: 9, name: 'Numba 9' },
    { id: 10, name: 'Numba 10' }
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.title = 'Tour of Heros';
        this.heroes = HEROES;
        this.myHero = this.heroes[1];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.chosenHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            template: "\n  <h1>{{title}}</h1>\n  <h2>My favorite hero is: {{myHero.name}}!</h2>\n  \n  <p>Heroes:</p>\n  <ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\" \n  [class.selected]=\"hero === chosenHero\"\n  (click)=\"onSelect(hero)\">\n  <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n  </ul>\n  <hero-detail [hero]=\"chosenHero\"></hero-detail>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map