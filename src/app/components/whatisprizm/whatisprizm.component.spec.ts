import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisprizmComponent } from './whatisprizm.component';

describe('WhatisprizmComponent', () => {
  let component: WhatisprizmComponent;
  let fixture: ComponentFixture<WhatisprizmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatisprizmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatisprizmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
