import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/User';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {
  @Input() user : User = new User();
  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.user = this.clientService.get(this.route.snapshot.params['id']);
  }
}
