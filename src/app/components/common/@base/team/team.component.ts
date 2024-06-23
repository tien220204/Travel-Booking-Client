import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  host: { 'collision-id': 'TeamComponent' },
})
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
