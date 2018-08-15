import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ServersService} from './servers.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import {Routes,RouterModule} from '@angular/router';
import { SingleserverComponent } from './singleserver/singleserver.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeoheaderComponent } from './deoheader/deoheader.component';

 const AppRoutes:Routes = [
 {path:'',component:HomeComponent},
 {path:'servers',component:ServersComponent,children:[
   {path:':id',component:SingleserverComponent},
 ]},
 //{path:'servers/:id',component:SingleserverComponent},
 {path:'notfound',component:NotfoundComponent},
 {path:'**',redirectTo:'notfound'}
 ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    SingleserverComponent,
    NotfoundComponent,
    DeoheaderComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
