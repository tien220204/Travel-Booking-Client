import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  host: { 'collision-id': 'HowItWorksComponent' },
})
export class HowItWorksComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
