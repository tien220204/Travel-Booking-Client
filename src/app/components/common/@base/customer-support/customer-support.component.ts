import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  standalone: true,
  imports: [],
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
  host: { 'collision-id': 'CustomerSupportComponent' },
})
export class CustomerSupportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
