import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public sectionTitle = 'Derniers projects'


  public projectCategories = [
    {
      lang: 'fr',
      title: 'Tous',
      optionValue: 'all'
    },
    {
      lang: 'fr',
      title: 'E-commerce',
      optionValue: 'ecomm'
    },
    {
      lang: 'fr',
      title: 'Logistique',
      optionValue: 'logistic'
    },
    {
      lang: 'fr',
      title: 'Scolaire',
      optionValue: 'school'
    }
  ]

  public workFilter: string;
  public singleGallery1: any;
  public albums: any = [];

  videoObject: Array<object> = [
    {
      video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
      posterImage: 'assets/images/works/3.svg'
    }
  ];

  constructor() {
    this.workFilter = 'all';
    this.singleGallery1 = [
      {
        src: 'assets/images/works/1.svg',
        caption: 'Project Management Illustration',
        thumb: 'assets/images/works/1.svg'
      }
    ];

    for (let i = 5; i >= 1; i--) {
      const album = {
        src: 'assets/images/works/' + i + '.svg',
        caption: 'Image ' + i + ' caption here',
        thumb: 'assets/images/works/' + i + '.svg'
      };

      this.albums.push(album);
    }
  }

  ngOnInit(): void {}

  onChange(e) {
    this.workFilter = e.target.value;
  }
}
