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
<<<<<<< HEAD
  email: string = 'taticroches@fumec.com'
=======
  email: string = 'taticroche@croche.com'
>>>>>>> 7314bd15d02b997047601c12c5d8dd464f72edcb
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
