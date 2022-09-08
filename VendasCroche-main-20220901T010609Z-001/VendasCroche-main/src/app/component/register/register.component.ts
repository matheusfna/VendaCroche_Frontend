import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nome: string = ''
  email: string = ''
  password: string = ''
  router: any;
  errorPassword = false;
  errorEmail = false;
  errorNome = false;

  constructor(private loginService: LoginService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }



  onSubmit() {

    if (this.email !== '' && this.password !== '') {
      let data = {
        nome: this.nome,
        email: this.email,
        password: this.password
      }

      console.log(data)
      this.loginService.setRegisterTest(data);


      let verify;
      setTimeout(() => {
        verify = this.loginService.veryfiLoginUsersTest(data);
        console.log(verify);
        if (verify) {
          this.router.navigateByUrl('/home')
        } else {
          window.alert('não existe')
        }


      }, 1000);








    } else {
      if (this.password == '') {
        this.errorPassword = true;
      }
      if (this.email == '') {
        this.errorEmail = true;
      }
      if (this.nome == '') {
        this.errorNome = true;

      }
      console.error("email ou password não esta preenchido");
    }

  }

}
