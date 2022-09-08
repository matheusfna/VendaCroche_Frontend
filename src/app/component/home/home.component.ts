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

  filmes = [
    {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa (Filme)",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    }, {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa o filme",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    }, {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa o filme",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    }, {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa o filme",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    }, {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa o filme",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    }, {
      name: "Zack Snyder's Justice League",
      path: "assets/imagens/1.jpg",
    },
    {
      name: "Coringa o filme",
      path: "assets/imagens/2.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
    {
      name: "Raya e o Último Dragão",
      path: "assets/imagens/4.jpg",
    },
    {
      name: 'Enquanto Estivermos Juntos',
      path: "assets/imagens/5.jpg",
    },
    {
      name: 'A Cinco Passos deVocê',
      path: "assets/imagens/6.jpg",
    },
  ]


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
