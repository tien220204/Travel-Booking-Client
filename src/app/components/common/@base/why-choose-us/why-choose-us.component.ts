import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  host: { 'collision-id': 'WhyChooseUsComponent' },
})
export class WhyChooseUsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
