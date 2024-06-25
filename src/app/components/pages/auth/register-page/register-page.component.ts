import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  host: { 'collision-id': 'RegisterPageComponent' },
})
export class RegisterPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
