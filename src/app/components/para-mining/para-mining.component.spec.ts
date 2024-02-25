import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaMiningComponent } from './para-mining.component';

describe('ParaMiningComponent', () => {
  let component: ParaMiningComponent;
  let fixture: ComponentFixture<ParaMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParaMiningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParaMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
