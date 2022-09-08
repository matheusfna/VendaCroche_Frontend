import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-streaming',
  templateUrl: './view-streaming.component.html',
  styleUrls: ['./view-streaming.component.css']
})
export class ViewStreamingComponent implements OnInit {
  private api_img_bg = environment.api_img_bg;
  movieSelected: any;
  bgimage: any;
  releaseDate :any;
  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(x => {
      this.movieService.getById(x.id).subscribe(x => {
        this.movieSelected = x;
        this.bgimage = (this.api_img_bg + x.backdrop_path);
        console.log('movieSelected');
        console.log(this.movieSelected);
        this.releaseDate = this.movieSelected.release_date.split('-')[0];
        console.log(this.releaseDate);

        this.movieService.getVideoById(x.id).subscribe(x => {
          console.log(x);
        })
      });
    })
  }

  ngOnInit(): void {
  }

}
