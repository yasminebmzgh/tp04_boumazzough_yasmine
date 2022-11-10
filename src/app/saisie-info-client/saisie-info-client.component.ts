import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-saisie-info-client',
  templateUrl: './saisie-info-client.component.html',
  styleUrls: ['./saisie-info-client.component.less']
})
export class SaisieInfoClientComponent implements OnInit {
  
  clientVerified: User = new User();
  client: User = new User();

  constructor() {}

  ngOnInit(): void {}

  zipKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/) || this.client.cp.length >= 5) {
      event.preventDefault();
    }
  }

  phoneKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/)) {
      event.preventDefault();
    }
  }

  SubmitForm(): void {
    if (this.client.mdp !== this.client.confirmMdp) {
      alert(
        "le mot de passe n'est pas identique à la confirmation de mot de passe"
      );
      return;
    }
    this.clientVerified = { ...this.client };
  }
}
