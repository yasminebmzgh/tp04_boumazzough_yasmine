import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SaisieInfoClientComponent } from './saisie-info-client/saisie-info-client.component';


const routes: Routes = [
  { path: '', component: SaisieInfoClientComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
