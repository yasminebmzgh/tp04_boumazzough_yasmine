import { Component, OnInit } from '@angular/core';
import { Client } from '../core/Client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-results',
  templateUrl: './client-results.component.html',
  styleUrls: ['./client-results.component.css']
})
export class ClientResultsComponent implements OnInit {

  dataSource!: Array<Client>;
  displayedColumns: string[] = ['lastName', 'firstName', 'email', 'phone', 'city','country'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.dataSource = this.clientService.getAll();
  }

}