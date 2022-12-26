import { Injectable } from '@angular/core';
import { Services } from './services';

@Injectable({
  providedIn: 'root'
})
export class ServiceCadastro {

  constructor(private service: Services) { }

  cadastrar(body:any){
        this.service.Post(body, 'cadastro').subscribe(res => {

        })
            
  }

}