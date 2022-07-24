import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment';

interface cryptoCurrencyFees {
  [cryptocurrencyName: string]: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public cryptoCurrencyFees: cryptoCurrencyFees = {
    eth: '',
    btc: ''
  }

  //Template constants
  public static readonly TEMPLATE_STRING_LITERALS = {
    TITLE: "What is the fee?",
    SUBTITLE: "See transaction fees of different cryptocurrencies"
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    /* fetch estimated tx fee at a 99% likelihood of the tx going through */
    fetch('https://api.blocknative.com/gasprices/blockprices', {
      method: 'GET',
      headers: {
        'Authorization': environment.apiKey
      }
    }).
    then(responce => responce.json()).
    then(data => this.cryptoCurrencyFees['eth'] = data.blockPrices[0].estimatedPrices[0].price)
  }

  /** Layout based on the screen size, if mobile then switch to one card per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ethereum', cols: 2, rows: 1, content: this.cryptoCurrencyFees['eth'] },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 2, rows: 1 }
        ];
      } else {
        return [
          { title: 'Ethereum', cols: 2, rows: 1, content: this.cryptoCurrencyFees['eth'] },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 }
        ];
      }
    })
  );

  public get getStringLiterals() {
    return DashboardComponent.TEMPLATE_STRING_LITERALS;
  }
}
