import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentService } from './investment.service';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  private investmentService = inject(InvestmentService);

  onCalculate(data: any) {
    this.investmentService.calculateInvestmentResults(data as InvestmentInput);
  }
}
