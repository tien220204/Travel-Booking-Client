import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  host: { 'collision-id': 'LoginPageComponent' },
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
