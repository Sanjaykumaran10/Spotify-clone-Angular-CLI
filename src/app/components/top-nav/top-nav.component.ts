import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
public isSerachFieldVisible: boolean =false;

  constructor( private router: Router, private sb:SearchBarService){

  }

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status =>{
      this.isSerachFieldVisible =status;

    })
      
  }

  onNavigateToLogin(){
      this.router.navigate(['/','login']);
  }
  onNavigateToSignup(){
    this.router.navigate(['/','signup']);
}
}
