import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyFormComponent } from './cryptocurrency-form.component';

describe('CryptocurrencyFormComponent', () => {
  let component: CryptocurrencyFormComponent;
  let fixture: ComponentFixture<CryptocurrencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
