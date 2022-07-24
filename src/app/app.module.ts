import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CryptocurrencyFormComponent } from './cryptocurrency-form/cryptocurrency-form.component';
import { ChipModule } from "primeng/chip";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CryptocurrencyFormComponent,
  ],
  imports: [
    BrowserModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
