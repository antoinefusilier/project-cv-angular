import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public aboutMe = {
    title : "A propos",
    profil : "photo_profil_bg_less.png",
    text: "Productif et créatif, j'ai repris mes études dans l'informatique et le développement pour en faire mon métier et ma carrière.",
    downloadCV : "Télécharger CV",
    downloadCVURL : "/sr/",
    backEndSkill: 85,
    frontEndSkill: 95,
    designSkill: 70,
    projectsCount: 2,
    cupOfCoffee: 670,
    satisfiedCustomerCount: 2,
    successFullCount: 23
  }

  constructor() {}

  ngOnInit(): void {}


  downloadCV = () => {

  }
}
