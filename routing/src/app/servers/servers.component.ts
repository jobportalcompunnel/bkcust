import { Component, OnInit } from '@angular/core';
import {ServersService} from '../servers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:any;
  constructor(private serversService:ServersService,private router:Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  OnLoadHome(){
   
    this.router.navigate(['/']);
  }

}
