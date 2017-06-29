import {Component, OnInit} from '@angular/core';
import {Hero} from "../class/hero";
import {HeroService} from "../service/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: '../views/heroes.component.html',
  styleUrls: ['../views/heroes.component.less'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  title: 'app';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes=[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


  getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}


