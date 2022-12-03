import { Component } from '@angular/core';
import { Results } from './models/movie.model';
import { LoginService } from './service/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  melhoresFilmes: Results = new Results();
  
  listUsers = [

    {
      nome: "Tatiana",
      email: 'taticroche@fumec.com',
      password: '123456789'
    }

  
  ]
  constructor(private loginService: LoginService) {
   
  }



  ngOnInit(): void {
    this.loginService.setUsersTest(this.listUsers);    
  }

  ngAfterViewInit(): void {

  }
}
