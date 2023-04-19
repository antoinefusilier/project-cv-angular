import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

import { ScrollSpyService } from '../../components/scroll-spy/scroll-spy.service';
import { Config } from '../../app-config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state(
        'collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px'
        })
      ),
      state(
        'expanded',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE
        })
      ),
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')])
    ])
  ]
})
export class LayoutComponent implements OnInit {


  public sections = [
    {
      uri: 'home',
      name: 'Accueil',
      description: 'Section d\'accueil, présentation photo, nom et métier',
      iconClass: 'icon-home'
    },
    {
      uri: 'about',
      name: 'A propos',
      description: 'Se présenter en une courte phrase et évaluer ses trois catégories compétences principales',
      iconClass: 'icon-user-following'
    },
    {
      uri: 'services',
      name: 'Services',
      description: 'Enregistrer les différents services que vous proposez',
      iconClass: 'icon-briefcase'
    },
    {
      uri: 'experience',
      name: 'Expériences',
      description: 'Lister vos expériences professionnelles et vos études',
      iconClass: 'icon-graduation'
    },
    {
      uri: 'works',
      name: 'Réalisations',
      description: 'Lister vos réalisation, c\'est votre porte-folio !',
      iconClass: 'icon-layers'
    },
    {
      uri: 'blog',
      name: 'Blog',
      description: 'Faite quelques articles concernant vos spécialités. Cela peut-être un courts, une référence à une activités dans votre précédante entreprise ou autre.',
      iconClass: 'icon-note'
    },
    {
      uri: 'contact',
      name: 'Contact',
      description: 'Section d\'accueil, présentation photo, nom et métier',
      iconClass: 'icon-bubbles'
    }
  ]

  public copyRigth = '® Antoine Fusilier 2023';

  public currentSection;
  public themeConfig: any;
  public windowWidth: number;

  public openClass: string = '';
  public contentClass: string = 'content';

  public mobileHeaderClass: string = 'mobile-header-1';
  public desktopHeaderClass: string = 'desktop-header-1';
  public horizontalNavClass: string = 'navbar-dark';

  public desktopLogo = 'assets/images/logo_antoine.svg';

  public collapsedCard: string = 'collapsed';

  constructor(public scrollSpy: ScrollSpyService, private location: Location) {
    this.themeConfig = Config.config;
    this.windowWidth = window.innerWidth;

    let currentURL = this.location.path();
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    switch (currentURL) {
      case baseHref + '/theme/view/vertical/default':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/vertical/dark':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/vertical/light':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'light';
        break;
      case baseHref + '/theme/view/collapsed/default':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/collapsed/dark':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/collapsed/light':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'light';
        break;
      case baseHref + '/theme/view/horizontal/default':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'default';
        break;
      case baseHref + '/theme/view/horizontal/dark':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'dark';
        break;
      case baseHref + '/theme/view/horizontal/light':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'light';
        break;
      default:
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;
    }
  }

  ngOnInit(): void {
    this.scrollSpy.count.subscribe((c) => {
      this.currentSection = c;
    });
    document.querySelector('body').classList.add(this.themeConfig.themeType);
    switch (this.themeConfig.theme) {
      case 'vertical':
        this.mobileHeaderClass = 'mobile-header-1';
        this.desktopHeaderClass = 'desktop-header-1';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo_antoine.svg';
        }
        break;
      case 'collapsed':
        this.mobileHeaderClass = 'mobile-header-2';
        this.desktopHeaderClass = 'desktop-header-2';
        this.contentClass = 'content-2';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.desktopLogo = 'assets/images/logo-b-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo-b-light.svg';
        }
        break;
      case 'horizontal':
        this.desktopHeaderClass = 'desktop-header-3 fixed-top';
        this.contentClass = 'content-3';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.horizontalNavClass = 'navbar-light';
            this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo_antoine.svg';
        }
        break;
    }
    this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
    this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;

    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    }
  }

  onResize(e) {
    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    } else {
      this.collapsedCard = 'collapsed';
    }
  }

  scrollTo(section) {
    this.currentSection = section;
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
  }
}
