import { Injectable } from '@angular/core';

@Injectable()
export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  constructor() { }

  getServers(){
    return this.servers; 
  }

  getserver(id:number){
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }

    
    );
    return server;
  }



}
