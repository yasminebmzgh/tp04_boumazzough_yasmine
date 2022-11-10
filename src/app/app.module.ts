import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SaisieInfoClientComponent } from './saisie-info-client/saisie-info-client.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { LetterOnlyDirective } from './letter-only.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { PhonePipePipe } from './phone-pipe.pipe';
import { ClientInfoComponent } from './client-info/client-info.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SaisieInfoClientComponent,
    TetiereComponent,
    LetterOnlyDirective,
    NumberOnlyDirective,
    PhonePipePipe,
    ClientInfoComponent,
    CatalogueComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
