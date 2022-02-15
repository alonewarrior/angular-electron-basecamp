import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronViewComponent } from './electron-view.component';

describe('ElectronViewComponent', () => {
  let component: ElectronViewComponent;
  let fixture: ComponentFixture<ElectronViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
