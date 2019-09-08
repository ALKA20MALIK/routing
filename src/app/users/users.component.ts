import {Component} from '@angular/core'

@Component({
    selector:'app-users',
    templateUrl:'./users.component.html'
})
export class UsersComponent{
    users=[
        {id:1,name:'alka'},
        {id:2,name:'Bhoop'},
        {id:3,name:'pooja'}
    ]
    
}