import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  host: { 'collision-id': 'NotFoundComponent' },
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
