import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() searchCity = new EventEmitter<string>();
  searchForm: FormGroup;
  submitted: boolean;
  @ViewChild('frm') myNgForm;

  get f() {
    return this.searchForm.controls;
  }

  ngOnInit() {
    this.submitted = false;
    this.searchForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  search(city: string) {
    this.searchCity.emit(city);
  }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    const { city } = this.searchForm.value;
    this.search(city);
    this.searchForm.reset();
    this.submitted = false;
  }

}

