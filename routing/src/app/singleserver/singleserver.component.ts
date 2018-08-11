import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ServersService} from '../servers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-singleserver',
  templateUrl: './singleserver.component.html',
  styleUrls: ['./singleserver.component.css']
})
export class SingleserverComponent implements OnInit,OnDestroy {
   server:{id:number,status:string};
  // paramssubscribtion:Subscription;
  constructor(private route:ActivatedRoute,private serverservice:ServersService) { }

  ngOnInit() {
    /*this.server = {
      id:this.route.snapshot.params['id'],
      status:this.route.snapshot.params['status']
    }
    this.paramssubscribtion = this.route.params.subscribe(
      (params:Params) => {
       this.server.id = +params['id'];
       this.server.status = params['status'];
      },
      
    )*/

    const id = +this.route.snapshot.params['id'];
    this.server = this.serverservice.getserver(id);
    this.route.params.subscribe(
     (params:Params) => {
      this.server = this.serverservice.getserver(+params['id']);
     }

    );
  }

  ngOnDestroy(){
    //this.paramssubscribtion.unsubscribe();
  }

}
