import { Component, inject } from '@angular/core';

import { InvestmentService } from './investment.service';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private investmentService = inject(InvestmentService);

  onCalculate(data: any) {
    this.investmentService.calculateInvestmentResults(data as InvestmentInput);
  }
}
