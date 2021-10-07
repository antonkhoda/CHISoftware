import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ILoansInterface,
  ILoansInterfaceShort,
} from '../shared/interfaces/loans';

@Component({
  selector: 'app-main-test',
  templateUrl: './main-test.component.html',
  styleUrls: ['./main-test.component.css'],
})
export class MainTestComponent implements OnInit {
  private url = environment.BACKEND_URL;
  private api = { loans: `${this.url}loans` };
  public allLoans: Array<ILoansInterface> = [];
  public targetLoan: Array<ILoansInterfaceShort> = [];
  public dialogWin: boolean = false;
  public availablePersonAmount: number = 1000000;
  public inputValue: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadLoans();
  }

  getAll(): Observable<ILoansInterface[]> {
    return this.http.get<ILoansInterface[]>(this.api.loans);
  }

  loadLoans(): void {
    this.getAll().subscribe(
      (data) => {
        this.allLoans = data;
      },
      (err) => {
        console.log('ERROR: ', err);
      }
    );
  }

  showLoans(loans: ILoansInterface): void {
    this.dialogWin = !this.dialogWin;
    let obj: ILoansInterfaceShort = {
      id: loans.id,
      title: loans.title,
      available: loans.available,
      term_remaining: loans.term_remaining,
    };
    this.targetLoan.push(obj);
  }

  investLoans(): void {
    if (this.inputValue && this.inputValue > 0) {
      this.allLoans.forEach((element) => {
        if (element.id == this.targetLoan[0].id) {
          let available: number = 0;
          let amount: number = 0;
          let value: number;
          if (this.inputValue % 1) {
            value = Math.round(this.inputValue);
          } else {
            value = this.inputValue;
          }
          if (typeof element.available === 'string') {
            available = parseFloat(element.available.replace(/[\s,%]/g, '.'));
          } else {
            available = element.available;
          }
          if (typeof element.amount === 'string') {
            amount = parseFloat(element.amount.replace(/[\s,%]/g, ''));
          } else {
            amount = element.amount;
          }
          let payment: number = this.availablePersonAmount - available * value;
          if (payment < 0) {
            alert('Sorry, you don`t have enough money');
          } else {
            this.availablePersonAmount = payment;
            element.amount = amount - value;
            element.invested = true;
          }
        }
      });
      this.inputValue = null;
      this.dialogWin = !this.dialogWin;
      this.targetLoan = [];
    } else {
      alert('Incorrect data!');
    }
  }

  dialogWinChangeStatus(): void {
    this.dialogWin = !this.dialogWin;
    this.targetLoan = [];
  }
}
