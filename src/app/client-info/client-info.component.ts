import { Component, Input } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {
  @Input() user : User = new User();
}
