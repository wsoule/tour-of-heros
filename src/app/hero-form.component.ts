import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(27, 'Dr. Smartman', this.powers[0], 'Albert Straightsign');

    submitted = false;

    onSubmit() {this.submitted = true;}

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}