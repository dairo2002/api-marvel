import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComicComponent } from './list-comic.component';

describe('ListComicComponent', () => {
  let component: ListComicComponent;
  let fixture: ComponentFixture<ListComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
