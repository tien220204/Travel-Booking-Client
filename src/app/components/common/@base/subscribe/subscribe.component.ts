import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  host: { 'collision-id': 'SubscribeComponent' },
})
export class SubscribeComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
