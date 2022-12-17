import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
