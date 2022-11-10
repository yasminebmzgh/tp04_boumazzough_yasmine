import { Component, OnInit,Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { of, from, interval, filter } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CatalogueService } from '../catalogue.service';
import { Subscription } from 'rxjs';
import { Catalogue } from '../core/Catalogue';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  search = new FormControl('');

  constructor(private catalogueService: CatalogueService) { }

  @Input() filtre: string = '';
  tabProduits: Array<Catalogue> = [];
  sub: Subscription = new Subscription;

  ngOnInit(): void {
    this.getCatalogue();
  }

  getCatalogue() {
    this.catalogueService.getCatalogue().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });
    console.log(this.tabProduits.length);
  }

  updateCatalogue(event: Catalogue[]) {
    this.tabProduits = event;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(event: any) {
    switch(event.target.value) {
      case 'name':
        this.tabProduits.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'description':
        this.tabProduits.sort((a, b) => a.description.localeCompare(b.description));
        break;
        
      default:
        break;
    }
  } 

}
