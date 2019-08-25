import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable'


@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(public routeSnapShot: ActivatedRoute) { }
    ngOnInit() {}
    
    
    Message = 'This is the home page content'
    idValues = this.methodNewName()

    private methodNewName():string
    {
        let idValues = this.routeSnapShot.snapshot.params['id'];

        if (!idValues) {
            idValues = '0';
        }
        return idValues;
    }
}
