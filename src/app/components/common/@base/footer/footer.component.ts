import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: { 'collision-id': 'FooterComponent' },
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
