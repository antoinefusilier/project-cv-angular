import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

declare let require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [
      transition(
        '* => *',
        useAnimation(bounceIn, {
          // Set the duration to 5seconds and delay to 2seconds
          params: {
            timing: 3,
            delay: 0,
            a: '3000px',
            b: '-25px',
            c: '10px',
            d: '-5px'
          }
        })
      )
    ])
  ]
})
export class HomeComponent implements OnInit, AfterContentInit {
  @Input() themeType: string;
  public bounce: number = 1;

  public home = {
    profileURL : 'assets/images/profil.svg',
    profileALT : 'Antoine Fusilier',
    firstName : 'Antoine',
    lastName : 'Fusilier',
    specialties : ['Concepteur Développeur D\'Application', 'Développeur Full Stack', 'Développeur Back-end'],
    hireMe : 'Engagez moi'
  }

  constructor() {
    setInterval(() => {
      this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
    }, 3000);
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      });
    }, 2000);
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
