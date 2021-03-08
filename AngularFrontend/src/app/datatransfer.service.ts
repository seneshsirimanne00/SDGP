import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FootballClub } from './dataStructure/FootballClub';
import { Match } from './dataStructure/Match';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http : HttpClient) { }

  getLeagueTable(){
    return this.http.get<FootballClub[]>("http://localhost:8080/getFootballClubs")
  }

  activateConsole(){
    return this.http.get("http://localhost:8080/console");
  }

  getSortedByWins(){
    return this.http.get<FootballClub[]>("http://localhost:8080/sortedWins");
  }
  
  getSortedByGoals(){
    return this.http.get<FootballClub[]>("http://localhost:8080/sortedGoals");
  }
  
  getSortedByPoints(){
    return this.http.get<FootballClub[]>("http://localhost:8080/sortedPoints");
  }

  getMatches(){
    return this.http.get<Match[]>("http://localhost:8080/getMatches");
  }

  filterByDate(date : String){
    if(date.length == 0){
      date = "none";
    }
    return this.http.post<Match[]>("http://localhost:8080/getMatchesByDate" , date )
  }

  getRandomMatch(){
    return this.http.get<Match>("http://localhost:8080/getRandomMatch");
  }

}
