import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  public blog = {
    title: 'Blog - Tips et cours',
    description: 'Retrouver tous les post du blog d\'Antoine',
    url: 'https://blog.antoinefusilier.dev',
    categories: [
      {
        id: 1,
        name: 'Cours',
        value: 'courses',
        description: 'Ensemble des cours !'
      },{
        id: 2,
        name: 'Tutoriel',
        value: 'tutorial',
        description: 'Tous les tutoriels !'
      },{
        id: 3,
        name: 'Conseils',
        value: 'tips',
        description: 'Nos petits conseils du jour !'
      },{
        id: 4,
        name: 'Comparatifs',
        value: 'reviews',
        description: 'Comparatifs et études sur différents sujets (Tech, informatique, mathématiques...)'
      }
    ],
    posts: [
      {
        id: 1,
        type: 'Cours',
        url: 'https://blog.antoinefusilier.dev/p=1',
        title: 'Installation RestJS',
        description: 'Comment installer et configurer au plus optimal un projet NodeJS basé suivant l\'architecture du framework RestJS',
        date: new Date(),
        editor: 'Antoine',
        pictures: [
          {
            url: '',
            src: 'assets/images/blog/1.svg',
            alt: 'Install RestJS - Lesson'
          }
        ]
      },
      {
        id: 2,
        type: 'Conseil',
        url: 'https://blog.antoinefusilier.dev/p=2',
        title: 'Étude d\'architecture Angular',
        description: 'Trouver l\'architecture d\'un projet Angular la plus optimal et évolutif possible.',
        date: new Date(),
        editor: 'Antoine',
        pictures: [
          {
            url: '',
            src: 'assets/images/blog/2.svg',
            alt: 'Architecture Angulaire !'
          }
        ]
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}
