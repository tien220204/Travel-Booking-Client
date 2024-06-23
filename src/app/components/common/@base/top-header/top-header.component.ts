import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  host: { 'collision-id': 'TopHeaderComponent' },
})
export class TopHeaderComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
