import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  isCreate = true;
  loading = false;
  error = false;
  apiError = {};
  item = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private personService: AccountService
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.loading = true;
      this.personService.show(this.activatedRoute.snapshot.params['id'])
        .subscribe(
          (response: any) => {
            this.loading = false;
            this.item = response;
          },
          (response) => {
            this.loading = false;
            alert('Item não encontrado');
            this.router.navigate(['/admin/accounts']);
          }
        );
      this.isCreate = false;
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

          this.router.navigate(['/admin/accounts'], { queryParams: { success: true } });
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

            this.router.navigate(['/admin/accounts'], { queryParams: { success: true } });
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
