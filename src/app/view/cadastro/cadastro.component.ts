import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceCadastro } from 'src/app/control/cadastro.sevices';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

      formCadastro:FormGroup

  constructor(private serviceCadastro:ServiceCadastro,
    private formBuilder: FormBuilder ) { 
      this.formCadastro = this.formBuilder.group({
        email : [],
        confirmarEmail:[],
        senha:[],
      }) 
    }

  ngOnInit(): void {
  }
cadastrar(){ 
   this.serviceCadastro.cadastrar(this.formCadastro.value)
  }
}
