import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGaurd } from './auth-gaurd.service';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'servers',component:ServersComponent},
{path:'users',canActivateChild:[AuthGaurd],component:UsersComponent,children:[
    {path:':id/:name',component:UsersComponent}
]}
]   

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{

}