import {Component, OnInit} from '@angular/core';
import {ELinks} from "../../../Models/Enums/links";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = ELinks;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onNavigateToProduct(): void {
    this.router.navigate(['products'])
  }
}
