import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contact = {
    title: 'Entrer en contact',
    email : 'contact@antoinefusilier.dev',
    contactByEmailTitle: 'Alors parlons de tous !',
    noFormButEmail: 'Vous n\'aimez pas les formulaires ? Envoyez moi un '
  }
  public contactEmail = 'contact@antoinefusilier.dev';

  constructor() {}

  ngOnInit(): void {}
}
