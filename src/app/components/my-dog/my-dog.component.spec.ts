import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDogComponent } from './my-dog.component';

describe('MyDogComponent', () => {
  let component: MyDogComponent;
  let fixture: ComponentFixture<MyDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
