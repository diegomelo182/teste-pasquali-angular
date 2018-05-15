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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() create = true;
  @Input() item = {};
  @Input()
  set personType(personType: number) {
    this._personType = personType;
    this.formInit();
  }

  @Output() sendData = new EventEmitter<any>();

  _personType = 0;
  form: FormGroup;
  error = false;

  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/,  /\d/, /\d/, /\d/, '-',  /\d/,  /\d/];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit = () => {
    if (this._personType === 0) {
      this.form = this.formBuilder.group({
        person: this.formBuilder.group({
          cpf_cnpj: this.formBuilder.control(
            '',
            [Validators.required, Validators.minLength(14)]
          ),
          name: this.formBuilder.control(
            '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
          ),
          bday: this.formBuilder.control(
            '',
            [Validators.required, Validators.minLength(10)]
          )
        })
      });
    } else {
      this.form = this.formBuilder.group({
        person: this.formBuilder.group({
          cpf_cnpj: this.formBuilder.control(
            '',
            [Validators.required, Validators.minLength(18)]
          ),
          name: this.formBuilder.control(
            '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(254)]
          ),
          business_name: this.formBuilder.control(
            '',
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
      form.kind = this._personType;
      this.sendData.emit(form);
    } else {
      this.error = true;
    }
  }

}
