import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from "@angular/router";
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth.service';

// const appRoutes:Routes=[
//   { path:'',component:HomeComponent},
//   { path:'servers',component:ServersComponent},
//   { path:'users',component:UsersComponent,children:[
//     { path:':id/:name',component:UserComponent}
//   ]},
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGaurd,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
