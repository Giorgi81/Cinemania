import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setTransitionHooks } from 'vue';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   timeStamp = new Date().getTime();

    
  constructor(private http: HttpClient, private route: Router) { }

  popularMovies: any
  trendingMovies: any
  comedyMovies: any

  ngOnInit(): void {

    this.getPopularMovies()
    this.getTrendingMovies()
    this.getComedyMovies()


  }



  getPopularMovies () {

    this.http.get('assets/data/popular-movies.json?timestamp=${timeStamp}').subscribe((popularMov) => {
      this.popularMovies = popularMov
    })

  }


  getTrendingMovies () {

     this.http.get('assets/data/trending-movies.json').subscribe((trendingMov) => {
      this.trendingMovies = trendingMov
    })

  }

  

  getComedyMovies () {

    this.http.get('assets/data/comedy-movies.json').subscribe((comedyMov) => {
      this.comedyMovies = comedyMov
    })

  }

  goToLogin() {

    this.route.navigate(['/login'])

  }



  goToMovie(type: string, id: string) {
    this.route.navigate(['movie', type, id])

  }

 



}
