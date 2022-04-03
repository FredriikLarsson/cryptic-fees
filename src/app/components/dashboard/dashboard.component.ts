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
  public txFee: String = ''; // network fees for ethereum transactions

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ethereum', cols: 1, rows: 1, content: this.txFee },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Ethereum', cols: 2, rows: 1, content: this.txFee },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    /* fetch estimated tx fee at a 99% likelihood of the tx going through */
    fetch('https://api.blocknative.com/gasprices/blockprices',{
      method: 'GET',
      headers: {
        'Authorization': environment.apiKey
      }
    }).
    then(responce => responce.json()).
    then(data => this.txFee = data.blockPrices[0].estimatedPrices[0].price)
  }
}
