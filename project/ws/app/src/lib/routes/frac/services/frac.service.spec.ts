import { TestBed } from '@angular/core/testing'

import { FracService } from './frac.service'

describe('FracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FracService = TestBed.inject(FracService)
    expect(service).toBeTruthy()
  })
})
