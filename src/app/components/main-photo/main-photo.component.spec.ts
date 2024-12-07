import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainPhotoComponent } from './main-photo.component'

describe('MainPhotoComponent', () => {
  let component: MainPhotoComponent
  let fixture: ComponentFixture<MainPhotoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPhotoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MainPhotoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
