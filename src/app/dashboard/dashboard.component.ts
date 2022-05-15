import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // transaction fees for ethereum transactions
  public txFee: String = '';
  public cryptoCurrencies: {name: string, displayName: string, imgPath: string, imgAltText: string}[] = [
    {"name": "btc", "displayName": "btc", "imgPath": "../../../assets/btc.svg", "imgAltText": ""},
    {"name": "eth", "displayName": "eth", "imgPath": "../../../assets/eth.svg", "imgAltText": ""}
  ]

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
    then(data => this.txFee = data.blockPrices[0].estimatedPrices[0].price)
  }

  /** Layout based on the screen size, if mobile then switch to one card per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ethereum', cols: 2, rows: 1, content: this.txFee },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 2, rows: 1 }
        ];
      } else {
        return [
          { title: 'Ethereum', cols: 2, rows: 1, content: this.txFee },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 }
        ];
      }
    })
  );
}
