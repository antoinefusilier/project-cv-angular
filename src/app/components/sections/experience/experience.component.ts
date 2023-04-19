import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences = {
    pro: [
      {
        start_date : 'Férvrier 2022',
        end_date : 'Mai 2023',
        title : 'Alternant Développeur Full Stack',
        description: 'Réalisation d\'un Dashboard Angular NodeJS de synchronisation entre différents serveurs, Cloud et fichiers. Installation d\'un projet Prestashop, des partitions Cloud, Administration Google Workspace Admin. Transfert de serveur de messagerie, Analyse des données produits, Etudes et solutions concernant le projet de site Web. ',
        businessName: 'Établissement Leblanc & Compagnies',
        businessCity: 'Bray-sur-Seine',
        businessCountry: 'France',
        projects : [
          {
            url: '#',
            title: 'https://etsleblanc.fr/',
            description : 'Site e-commerce Prestashop connecté directement à notre ERP !'
          }
        ]
      },
      {
        start_date : 'Octobre 2020',
        end_date : 'Octobre 2021',
        title : 'Gérant  S.A.R.L.',
        description: 'Direction et entreprenariat d\'une entreprise multi-services. Espaces vert, ménage, bricolage. Gestion management d\'un effectif de 10 personnes. Comptabilité. Commercial sur un portefeuille de 70 clients et 2000 prospects.',
        businessName: 'Aideco Services',
        businessCity: 'Nanterre',
        businessCountry: 'France',
        projects : [
          {
            url: '#',
            title: 'https://aideco-services.com/',
            description : 'Site web de réservation de nos différentes services et rendez-vous !'
          }
        ]
      },
      {
        start_date : 'Juin 2016',
        end_date : 'Juillet 2016',
        title : 'Stagiaire Testeur d\'Application',
        description: 'Tests et rapports en anglais des différentes erreurs d\'affichage.',
        businessName: 'Bureau Véritas',
        businessCity: 'Nanterre',
        businessCountry: 'France',
        projects : [
          // {
          //   url: '',
          //   title: '',
          //   description : ''
          // }
        ]
      }
    ],
    training : [
      {
        start_date : 'Septembre 2017',
        end_date : 'Juillet 2018',
        title : 'Concepteur Développeur d\'applications',
        description: 'Formation :  renforcer vos compétences en back (Symfony ou Node.JS) et pour concevoir une application du cahier des charges à la mise en production (développement, sécurité, bases de données, gestion de projet...).',
        schoolName: '3W Academy',
        schoolCity: 'Paris',
        schoolCountry: 'France',
        languages : [
          'NodeJS', 'TensorFlow', 'UML', 'Merise', 'SQL', 'Avancé'
        ],
        technologies: [
          'Méthode Agile', 'Framework Scrum'
        ],
        projects : [

        ]
      },
      {
        start_date : 'Septembre 2017',
        end_date : 'Juillet 2018',
        title : 'Développeur Full Stack',
        description: '',
        schoolName: '3W Academy',
        schoolCity: 'Paris',
        schoolCountry: 'France',
        languages : [
          'NodeJS', 'Angular', 'UML'
        ],
        technologies: [
          'Git', 'Trello', 'Slack', 'Mongo Atlas', 'Firebase', 'Google Cloud', 'Debian', 'Cyber Sécurité', 'PM2'
        ],
        projects : [
          {
            url: 'https://hcem.antoinefusilier.dev',
            title: 'Application Synchronisation CSV Divalto SQL Server vers Prestashop',
            description: ''
          },
          {
            url: 'https://lessons.antoinefusilier.dev',
            title: 'Application Gestion CV et cours ',
            description: ''
          },
          {
            url: 'https://titanic.antoinefusilier.dev',
            title: '(Cours) Titanic statistiques',
            description: ''
          }
        ]
      },
      {
        start_date : 'Octobre 2021',
        end_date : 'Février 2022',
        title : 'Développeur Web Junior - RNCP Niveau III',
        description: '',
        schoolName: '3W Academy',
        schoolCity: 'Versailles',
        schoolCountry: 'France',
        languages : [
          'HTML', 'CSS', 'JS', 'PHP', 'SQL'
        ],
        technologies: [
          'Linux', 'VS Code', 'PhpMyAdmin'
        ],
        projects : [
          {
            url : 'https://e-commercePhp.antoinefusilier.dev',
            title : 'Site e-commerce PHP + dashboard',
            description : 'Réalisation d\'un site web fonctionnel, en utilisant l\'ensemble des technologies vues'
          }

        ]
      },
      {
        start_date : 'Octobre 2019',
        end_date : 'Mai 2020',
        title : 'Ternimal ES',
        description: 'Spécifications: Géopolitique et Sciences Politiques, Histoire Géographie',
        schoolName: 'Lycée Alésia',
        schoolCity: 'Paris',
        schoolCountry: 'France',
        projects : [

        ]
      },
      {
        start_date : 'Septembre 2018',
        end_date : 'Juillet 2019',
        title : 'Première STI2D',
        description: '',
        schoolName: 'La Salle Saint-Nicolas',
        schoolCity: 'Issy-les-Moulineaux',
        schoolCountry: 'France',
        projects : [

        ]
      },
      {
        start_date : 'Septembre 2017',
        end_date : 'Juillet 2018',
        title : 'Première Scientifique',
        description: '',
        schoolName: 'Lycée Internat de l\'Ile de France',
        schoolCity: 'Villebon-sur-Yvette',
        schoolCountry: 'France',
        projects : [

        ]
      },
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}
