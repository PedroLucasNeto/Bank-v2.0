import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private localStorageService : LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.clear;
  }

}
