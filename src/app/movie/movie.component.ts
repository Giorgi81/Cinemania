import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { anyTypeAnnotation, throwStatement } from '@babel/types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
constructor(private http : HttpClient,private route : ActivatedRoute, private routing : Router) {}

  id : string = ''
  type : string = ''
  url : string = ''
  movies : any = ''
  movie : any = ''
  


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.type = this.route.snapshot.params['type']


    if (this.type === 'popular') {
      this.url = 'assets/data/popular-movies.json'
    } else if (this.type === 'Trending') {
      this.url = 'assets/data/trending-movies.json'
    }else {
      this.url = 'assets/data/comedy-movies.json'
    }
    this.getMovies()
  }


  getMovies () {

    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies
      let index = this.movies.findIndex((movie: { id: any; }) => movie.id == this.id)


      if(index > -1) {
        this.movie = this.movies[index]
      }
    } )
}

  goToLogin() {

    this.routing.navigate(['/login'])

  }







}

