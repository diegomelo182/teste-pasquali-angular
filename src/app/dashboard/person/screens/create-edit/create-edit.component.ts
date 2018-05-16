import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

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
  apiError = {};
  item = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.loading = true;
      this.personService.show(this.activatedRoute.snapshot.params['id'])
        .subscribe(
          (response: any) => {
            if (response.kind === 'business_taxpayers') {
              this.personType = 1;
            }
            this.loading = false;
            this.item = response;
          },
          (response) => {
            this.loading = false;
            alert('Item não encontrado');
            this.router.navigate(['/admin/people']);
          }
        );
      this.isCreate = false;
    }
  }

  setPersonType = (personType) => {
    if (this.personType !== personType) {
      this.personType = personType;
    }
  }

  submit = (data) => {
    if (data.create) {
      this.loading = true;
      this.personService.create(data.form)
      .subscribe(
        (response) => {
          this.loading = false;
          this.error = false;

          this.router.navigate(['/admin/people'], { queryParams: { success: true } });
        },
        (response) => {
          this.loading = false;
          this.error = true;
          this.apiError = response.error;
        }
      );
    } else {
      this.personService.update(this.activatedRoute.snapshot.params['id'], data.form)
        .subscribe(
          (response) => {
            this.loading = false;
            this.error = false;

            this.router.navigate(['/admin/people'], { queryParams: { success: true } });
          },
          (response) => {
            this.loading = false;
            this.error = true;
            this.apiError = response.error;
          }
        );
    }
  }

}
