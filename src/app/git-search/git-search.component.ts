import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
import { GitSearch } from '../git-search'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-git-search',
  animations: [
  trigger('openClose', [
    // ...
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('1s')
    ]),
  ]),
],

  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']

})
export class GitSearchComponent implements OnInit {
    searchResults: GitSearch;
    searchQuery: string;
    constructor(private GitSearchService: GitSearchService) { }
    isOpen = true;

    toggle() {
      this.isOpen = !this.isOpen;
    }
  
  ngOnInit() {
    this.searchQuery="";
   this.gitSearch();
  }
  gitSearch = () => {
    this.toggle();
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
