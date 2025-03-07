import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardItemComponent } from './dashboard-item.component'

describe('DashboardItemComponent', () => {
  let component: DashboardItemComponent
  let fixture: ComponentFixture<DashboardItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardItemComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
