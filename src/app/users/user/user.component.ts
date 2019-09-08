import {Component} from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent{
    id:number
    name:string
    subscription:Subscription

    constructor(private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        // this.id=this.activatedRoute.snapshot.params['id']
        // this.name=this.activatedRoute.snapshot.params['name']

      this.subscription=this.activatedRoute.params
        .subscribe((params:Params)=>{
            this.id=params['id'],
            this.name=params['name']
        })

        console.log(this.subscription)
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
}