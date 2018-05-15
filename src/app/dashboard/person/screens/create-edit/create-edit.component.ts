import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  isCreate = true;
  personType = 0;

  constructor() { }

  ngOnInit() {
  }

  setPersonType = (personType) => {
    if (this.personType !== personType) {
      this.personType = personType;
    }
  }

}
