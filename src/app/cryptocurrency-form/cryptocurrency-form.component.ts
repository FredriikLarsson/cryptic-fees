import { Component, OnInit } from '@angular/core';

interface cryptoCurrency {
  name: string,
  displayName: string,
  icon: string
}

@Component({
  selector: 'app-cryptocurrency-form',
  templateUrl: './cryptocurrency-form.component.html',
  styleUrls: ['./cryptocurrency-form.component.scss']
})
export class CryptocurrencyFormComponent implements OnInit {

    //Cryptocurrencies
    public cryptoCurrencies: cryptoCurrency[] = [
      {
        name: "eth", 
        displayName: "eth", 
        icon: "fa-brands fa-ethereum"
      },
      {
        name: "btc", 
        displayName: "btc", 
        icon: "fa-brands fa-bitcoin"
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
