import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceLogin } from 'src/app/control/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(private serviceLogin: ServiceLogin,
  private formBuilder: FormBuilder) {
    this.formLogin  = this.formBuilder.group ({
      email :[],
      senha :[]

    })
   }

  ngOnInit(): void {
  }

  logar(){
    this.serviceLogin.logar()
  }
}
