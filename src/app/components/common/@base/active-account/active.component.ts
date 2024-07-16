import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { AccountAPIService } from '../../../../services/AccountApi.Service';

@Component({
  selector: 'app-top-header',
  standalone: true,
  host: { 'collision-id': 'TopHeaderComponent' },
  template: `
    <p>Product ID: </p>
  `,
})
export class ActiveComponent  {
  message: string = '';
  securityCode: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountAPIService: AccountAPIService
  ) {
    
  }

  ngOnInit(): void {
    console.log("lan 1")
    
    this.route.paramMap.subscribe(params => {
      this.securityCode = params.get('securityCode')!;
    });
    /**
     * 
     * 
     * 
     */



    
  }
}
