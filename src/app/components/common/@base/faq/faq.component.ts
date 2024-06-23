import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  host: { 'collision-id': 'FaqComponent' },
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Accordion
  contentHeight: number = 0;
  openSectionIndex: number = -1;
  toggleSection(index: number): void {
    if (this.openSectionIndex === index) {
      this.openSectionIndex = -1;
    } else {
      this.openSectionIndex = index;
      this.calculateContentHeight();
    }
  }
  isSectionOpen(index: number): boolean {
    return this.openSectionIndex === index;
  }
  calculateContentHeight(): void {
    const contentElement = document.querySelector('.accordion-content');
    if (contentElement) {
      this.contentHeight = contentElement.scrollHeight;
    }
  }
}
