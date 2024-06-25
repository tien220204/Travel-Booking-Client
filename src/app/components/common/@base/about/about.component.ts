import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: { 'collision-id': 'AboutComponent' },
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
