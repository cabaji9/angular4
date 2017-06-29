import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { Location }               from '@angular/common';
import {ActivatedRoute, Params} from "@angular/router";

import {Hero} from "../class/hero";
import {HeroService} from "../service/hero.service";



@Component({
  selector: 'hero-detail',
  templateUrl: '../views/hero-detail.component.html',
  styleUrls: ['../views/hero-detail.component.less'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit  {

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) { }

  @Input()  selectedHero:Hero

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.selectedHero = hero);
  }



  save(): void {
    this.heroService.update(this.selectedHero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
