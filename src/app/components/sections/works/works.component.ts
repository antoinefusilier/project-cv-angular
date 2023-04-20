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
      optionValue: 'all',
      projects: [1]
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

  public projects = [
    {
      id: 1,
      name: 'E-Commerce PHP',
      description: 'Site en PHP pure pour le diplôme de Developpeur Web Junior. Il est composé d\'un interface e-commerce proposant les produits, et une recherche, ainsi que la gestion d\'un compte client. Et un interface "tableau de bord" dashbard permettant la gestion des produits, catégories, clients et utilisateurs.',
      url: 'ecommphp.antoinefusilier.dev',
      src: 'assets/images/works/1.svg',
      caption: 'E-Commerce PHP Project',
      thumb: 'assets/images/works/1.svg',
      category: 'ecomm',
      categoryName: 'E-commerce',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/ecommphp.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/ecommphp.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/ecommphp.svg'
        }
      ]

    },
    {
      id: 2,
      name: 'CMS ERP Manager',
      description: 'Application de synchronisation CSV, Divalto SQL Server vers Prestashop.',
      url: 'hcem.antoinefusilier.dev',
      src: 'assets/images/works/cmserpmanager.svg',
      caption: 'CMS ERP Manager',
      thumb: 'assets/images/works/cmserpmanager.svg',
      category: 'logistic',
      categoryName: 'E-commerce',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/cmserpmanager.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/cmserpmanager.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/cmserpmanager.svg'
        }
      ]
    },
    {
      id: 3,
      name: 'Titanic',
      description: 'Web application de test sur les statistiques du tragique accident du titanic',
      url: 'titanic.antoinefusilier.dev',
      src: 'assets/images/works/titanicangu.svg',
      caption: 'Titanic',
      thumb: 'assets/images/works/titanicangu.svg',
      category: 'school',
      categoryName: 'Scolaire',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/titanicangu.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/titanicangu.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/titanicangu.svg'
        }
      ]
    },
    {
      id: 4,
      name: 'E-Commerce Angular',
      description: 'Projet de site e-commerce en utilisant la technologie fron-end Angular. Project abandonnée au commencement pour des raison privée de l\'entreprise.',
      src: 'assets/images/works/ecommangunnode.svg',
      caption: 'Titanic',
      thumb: 'assets/images/works/ecommangunnode.svg',
      category: 'ecomm',
      categoryName: 'E-Commerce',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/ecommangunnode.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/ecommangunnode.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/ecommangunnode.svg'
        }
      ]
    },
    {
      id: 5,
      name: 'App Pastries',
      description: 'Gagner des patistries en lançant des dés !',
      src: 'assets/images/works/apppastries.svg',
      caption: 'Titanic',
      thumb: 'assets/images/works/apppastries.svg',
      category: 'school',
      categoryName: 'Scolaire',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/apppastries.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/apppastries.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/apppastries.svg'
        }
      ]
    },
    {
      id: 6,
      name: 'Dashboard Presta PHP',
      description: 'Project de tableau de bord pour répondre à la demande spécifique de l\'entreprise, Leblanc. Importer et gérer des produits en module marketings et simplifier l\'interface du dashboard de Prestashop',
      src: 'assets/images/works/dashprestaphp.svg',
      caption: 'dashboard_presta_php',
      thumb: 'assets/images/works/dashprestaphp.svg',
      category: 'logistic',
      categoryName: 'Logistique',
      movies: [
        // {
        //   video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
        //   posterImage: 'assets/images/works/dashprestaphp.svg'
        // }

      ],
      gallery: [
        {
          src: 'assets/images/works/dashprestaphp.svg',
          caption: 'E-Commerce PHP',
          thumb: 'assets/images/works/dashprestaphp.svg'
        }
      ]
    }
  ]

  projectsOrder = () => {
    return this.projects.filter((v)=>v.category === this.workFilter ? v : '')
  }


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
    this.projectsOrder();
  }
}
