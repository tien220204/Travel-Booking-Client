import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  host: { 'collision-id': 'HotelsComponent' },
})
export class HotelsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
