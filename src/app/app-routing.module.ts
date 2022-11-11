import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { SaisieInfoClientComponent } from './saisie-info-client/saisie-info-client.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


const routes: Routes = [
  { path: '', component: AppComponent },
    { path: './saisie-info-client/:id', component: SaisieInfoClientComponent },
    {path: './panier', component: PanierComponent},
    {path: './catalogue', component: CatalogueComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
