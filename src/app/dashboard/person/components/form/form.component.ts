import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  @Input()
  set personType(personType: number) {
    this._personType = personType;
    this.formInit();
  }

  @Output() sendData = new EventEmitter<any>();

  _apiErrors = {};
  _personType = 0;
  form: FormGroup;
  error = false;

  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/,  /\d/, /\d/, /\d/, '-',  /\d/,  /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit = () => {
    if (this._personType === 0) {
      this.form = this.formBuilder.group({
        person: this.formBuilder.group({
          cpf_cnpj: this.formBuilder.control(
            this.item && this.item.cpf_cnpj ? this.item.cpf_cnpj : '',
            [Validators.required, Validators.minLength(14)]
          ),
          name: this.formBuilder.control(
            this.item && this.item.name ? this.item.name : '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
          ),
          bday: this.formBuilder.control(
            this.item && this.item.bday ? this.datePipe.transform(this.item.bday, 'dd/MM/yyyy') : '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.pattern(/([0-2][1-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-9]{2})/g)
            ]
          )
        })
      });
    } else {
      this.form = this.formBuilder.group({
        person: this.formBuilder.group({
          cpf_cnpj: this.formBuilder.control(
            this.item && this.item.cpf_cnpj ? this.item.cpf_cnpj : '',
            [Validators.required, Validators.minLength(18)]
          ),
          name: this.formBuilder.control(
            this.item && this.item.name ? this.item.name : '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
          ),
          business_name: this.formBuilder.control(
            this.item && this.item.business_name ? this.item.business_name : '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
          )
        })
      });
    }
  }

  submit = () => {
    if (this.form.valid) {
      this.error = false;
      const form = this.form.value;
      form.person.kind = this._personType;
      this.sendData.emit({ form, create: this.create });
    } else {
      this.error = true;
    }
  }

}
