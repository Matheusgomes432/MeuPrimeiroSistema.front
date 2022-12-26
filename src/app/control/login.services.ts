import { Injectable } from '@angular/core';
import { Services } from './services';

    @Injectable({
    providedIn: 'root'
    })
    export class ServiceLogin {

    constructor(private service: Services) { }


        logar() {
            this.service.Get('Login').subscribe( res => { 
                console.log(res)
            })
        }


    }

