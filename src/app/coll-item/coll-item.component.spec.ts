import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollItemComponent } from './coll-item.component';

describe('CollItemComponent', () => {
  let component: CollItemComponent;
  let fixture: ComponentFixture<CollItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
