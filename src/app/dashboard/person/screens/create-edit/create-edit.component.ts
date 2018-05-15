import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../../services/person.service.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  isCreate = true;
  personType = 0;
  loading = false;
  error = false;

  constructor(
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  setPersonType = (personType) => {
    if (this.personType !== personType) {
      this.personType = personType;
    }
  }

  submit = (data) => {
    this.loading = true;
    this.personService.create(data)
      .subscribe(
        (response) => {
          this.loading = false;
          this.error = false;

          this.router.navigate(['/admin/people'], { queryParams: { success: true } });
        },
        (response) => {
          this.loading = false;
          this.error = true;
        }
      );
  }

}
