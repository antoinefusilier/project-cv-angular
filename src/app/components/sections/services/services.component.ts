import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services = [
    {
      img: 'assets/images/service-1.svg',
      bg: 'bg-blue',
      title: 'UI/UX design',
      description: 'Conception visuelle suivant les dernières normes de graphisme. Je travail en collaboration avec des graphiste expérimenté'
    },
    {
      img: 'assets/images/service-2.svg',
      bg: 'bg-yellow',
      title: 'Web Development',
      description: 'Développement aux dernières technologies en fonction de votre besoin et demande. Nous fournissons un code structuré et normée, après un dossier d\'étude'
    },
    {
      img: 'assets/images/services_study.svg',
      bg: 'bg-pink',
      title: 'Réalisation de solutions',
      description: 'Recherche, étude et conception de projet répondant à votre besoin, d\'après vos conditions et celles de l\'informatique !'
    }
  ]

  public para1 = {
    question :'Vous rechercher un travail sur mesure ?',
    click: 'Cliquez ici',
    clickFor: 'pour me contacter ! 👋'
  }

  constructor() {}

  ngOnInit(): void {}

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
