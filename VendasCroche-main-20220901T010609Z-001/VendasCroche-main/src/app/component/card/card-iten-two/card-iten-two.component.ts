import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MovieResults } from 'src/app/models/movie.model';

@Component({
  selector: 'app-card-iten-two',
  templateUrl: './card-iten-two.component.html',
  styleUrls: ['./card-iten-two.component.css']
})
export class CardItenTwoComponent implements OnInit {

  @Input() movie: MovieResults = new MovieResults();
  
  @Input() title:string = '';
  @Input() url:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
