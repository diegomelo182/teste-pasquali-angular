import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AccountService } from '../../services/account.service';
import { PersonService } from '../../../person/services/person.service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() create = true;
  @Input() item: any = {};
  @Input()
  set apiErrors(apiErrors: any) {
    this._apiErrors = apiErrors;
  }

  @Output() sendData = new EventEmitter<any>();

  form: FormGroup;
  loading = false;
  error = false;
  _apiErrors = {};
  parentAccounts = [];
  people = [];

  // masks
  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private accountService: AccountService,
    private personService: PersonService,
  ) { }

  ngOnInit() {
    this.fetchParentsAccounts();
  }

  formInit = () => {
    this.form = this.formBuilder.group({
      account: this.formBuilder.group({
        name: this.formBuilder.control(
          this.item && this.item.name ? this.item.name : '',
          [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
        ),
        init_date: this.formBuilder.control(
          this.item && this.item.init_date ? this.datePipe.transform(this.item.init_date, 'dd/MM/yyyy') : '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(/([0-2][1-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-9]{2})/g)
          ]
        ),
        kind: this.formBuilder.control(
          this.item && this.item.kind ? this.item.kind : 'matrix',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        ),
        status: this.formBuilder.control(
          this.item && this.item.status ? this.item.status : 'activated',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        ),
        parent_account_id: this.formBuilder.control(
          this.item && this.item.parent_account_id ? this.item.parent_account_id : '1',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        ),
        person_id: this.formBuilder.control(
          this.item && this.item.person_id ? this.item.person_id : '',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        )
      })
    });
  }

  submit = () => {
    if (this.form.valid) {
      this.error = false;
      const form = this.form.value;
      if (!form.account.balance) {
        form.account.balance = 0;
      }
      if (form.account.kind === 'matrix') {
        form.parent_account_id = null;
      }
      this.sendData.emit({ form, create: this.create });
    } else {
      this.error = true;
    }
  }

  fetchParentsAccounts = () => {
    this.loading = true;
    const requests = [
      this.accountService.index(),
      this.personService.index()
    ];

    forkJoin(requests)
      .subscribe(
        (response: any[]) => {
          this.error = false;
          this.loading = false;

          this.parentAccounts = response[0];
          this.people = response[1];

          this.formInit();
        },
        (response) => {
          this._apiErrors = response;
          this.error = true;
        }
      );
  }

}
