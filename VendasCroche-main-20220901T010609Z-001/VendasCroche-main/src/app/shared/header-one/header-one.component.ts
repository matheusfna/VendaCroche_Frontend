import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {
  userLogin: any = [];
  activedRoute: any = '';
  router:any;
  constructor(router: Router, public loginService: LoginService) {
    this.router = router;
    this.activedRoute = router.url
    this.userLogin = this.loginService.get()

    console.log(this.userLogin)
  }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.remove();
    window.document.location.reload(true);

    this.router.navigateByUrl('/home');
  }

  get rotaAtiva() {
    return this.activedRoute;
  }

}
