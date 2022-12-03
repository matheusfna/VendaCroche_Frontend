import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Results } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Popularcroche: any = new Results();
  searchcroche: any = new Results();
  page: number = 0;
  pageSearch: number = 0;

  search: any = null;
  constructor(private movieService: MovieService, private router: Router) {

    this.movieService.getMaisPopular().subscribe(data => {
      this.Popularcroche = new Results(data);
      this.page = this.Popularcroche.page;

    });
  }

  ngOnInit(): void {

  }

  croche = [
    {
      id:1,
      name: "Croche de Boneca",
      path: "../assests/imagens/1.jpeg",
    },
    
    {
      id:2,
      name: "Croche de Boneca",
      path: ".../assets/imagens/2.jpeg",
    },   
    {
      id:3,
      name: "Croche de Boneca",
      path: ".../assets/imagens/3.jpeg",
    }
    
  ]



  filterSearch() {
    if (this.search.length > 3) {


      this.movieService.searchMovie(this.search).subscribe(data => {

        this.searchcroche = new Results(data);
        this.pageSearch = this.searchcroche.page;


      });

    }

  }

clear(){
  this.search = null;
}

  gotoView(id: number) {

    this.router.navigate(['/view', id]);
  }
}
