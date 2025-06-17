import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TransferService} from '../../services/transfer-service';

@Component({
  selector: 'app-transfer',
  imports: [
    FormsModule
  ],
  templateUrl: './transfer.html',
  styleUrl: './transfer.scss'
})
export class Transfer implements OnInit {

  amountValue: string | null = null;
  pixKey: string = '';

  constructor(private transferService: TransferService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('amount-value');

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      this.amountValue = parsedData.value;
    }
  }

  submit() {

    const userEmail = sessionStorage.getItem('email');
    const pixType = 'number';

    if (userEmail) {
      if(this.amountValue) {
        this.transferService.pixTransfer(userEmail, pixType, this.pixKey, this.amountValue).subscribe({
          next: () => {
            sessionStorage.setItem('number', this.pixKey)
            this.router.navigate(['result']);
          }
        })
      }
    }
  }
  navigateBack() {
    this.router.navigate(["/transfer/amount"])
  }
}
