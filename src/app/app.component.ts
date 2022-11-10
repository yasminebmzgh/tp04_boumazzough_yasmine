import { Component,Input } from '@angular/core';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tp02-boumazzough-yasmine';
  @Input() user : User = new User();

}
