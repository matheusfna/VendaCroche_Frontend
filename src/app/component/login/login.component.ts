import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = 'czarvideos@fumec.com'
  password: string = '123456789'
  errorEmail = false;
  errorPassword = false;
  router: any;
  constructor(public loginService: LoginService, router: Router) {
    this.router = router;
  }


  ngOnInit(): void {
  }


  onSubmit() {

    if (this.email !== '' && this.password !== '') {
      let data = {
        email: this.email,
        password: this.password
      }
      let verify = this.loginService.veryfiLoginUsersTest(data);

      if (verify) {
        this.router.navigateByUrl('/home')
      } else {
        window.alert('não existe')
      }



    } else {
      if (this.password == '') {
        this.errorPassword = true;

      }
      if (this.email == '') {
        this.errorEmail = true;

      }
      console.error("email ou password não esta preenchido");
    }

  }



}
