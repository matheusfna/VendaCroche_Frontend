import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResults, Results } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PopularFilmes: any = new Results();
  searchFilmes: any = new Results();
  page: number = 0;
  pageSearch: number = 0;

  search: any = null;
  constructor(private movieService: MovieService, private router: Router) {

    this.movieService.getMaisPopular().subscribe(data => {
      this.PopularFilmes = new Results(data);
      this.page = this.PopularFilmes.page;

    });
  }

  ngOnInit(): void {

  }

  /*filmes = [
    {
      name: Colocar o nome do croche,
      path: "assets/imagens/colocarFotoCroche.jpeg",
    },    
  ]*/


  carregarMais() {
    this.movieService.getMaisPopularPage((++this.page)).subscribe(data => {
      for (const iterator of data.results) {
        this.PopularFilmes.results.push(new MovieResults(iterator));
      }
      this.PopularFilmes.page = data.page;
      this.page = data.page;
    });
  }

  carregarMaisSearch() {
    this.movieService.searchMoviePage(this.search,(++this.page)).subscribe(data => {
      for (const iterator of data.results) {
        this.searchFilmes.results.push(new MovieResults(iterator));
      }
      this.searchFilmes.page = data.page;
      this.pageSearch = data.page;
    });
  }


  filterSearch() {
    if (this.search.length > 3) {


      this.movieService.searchMovie(this.search).subscribe(data => {

        this.searchFilmes = new Results(data);
        this.pageSearch = this.searchFilmes.page;


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
