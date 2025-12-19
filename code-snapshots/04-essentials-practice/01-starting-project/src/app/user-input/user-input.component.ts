import { Component, signal } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initalInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  investmentDuration = signal('0');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    console.log('Form submitted', {
      initialInvestment: +this.initalInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.investmentDuration()
    });
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initalInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.investmentDuration()
    });

    this.resetInputs();
  }

  private resetInputs() {
    this.initalInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.investmentDuration.set('0');
  }
}
