import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Results } from './models/movie.model';
import { LoginService } from './service/login.service';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  melhoresFilmes: Results = new Results();
  
  listUsers = [

    {
      nome: "CzarAdmin",
      email: 'tatiCroche@fumec.com',
      password: '123456789'
    },    {
      nome: "teste",
      email: 'teste@fumec.com',
      password: '123456789'
    },

  
  ]
  constructor(private loginService: LoginService) {
   
  }



  ngOnInit(): void {
    this.loginService.setUsersTest(this.listUsers);    
  }

  ngAfterViewInit(): void {

  }
}
