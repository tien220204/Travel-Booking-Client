import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgClass],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  host: { 'collision-id': 'FeaturesComponent' },
})
export class FeaturesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
