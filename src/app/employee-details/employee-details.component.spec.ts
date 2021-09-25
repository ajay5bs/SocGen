import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee, EmployeeService } from '../employee.service';
import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      providers: [EmployeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the table with header dark theme', () => {
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('.thead-dark');
    expect(table).toBeTruthy();
  });

  it(`should fetch values from service to display the employee details`, () => {
    fixture.detectChanges();
    expect(component.employees.length).toBeGreaterThan(9);
  });

});
