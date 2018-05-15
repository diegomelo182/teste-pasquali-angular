import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../../services/person.service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = [];
  loading = false;
  success = false;
  error = false;
  personType = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams['success']) {
      this.success = true;
    }
    this.fetchData();
  }

  fetchData = () => {
    const params = {
      by_kind: this.personType
    };
    this.loading = true;
    this.personService.index(params)
      .subscribe(
        (response: any[]) => {
          this.items = response;
          this.loading = false;
        },
        (response) => {
          this.error = false;
          this.loading = false;
        }
      );
  }

  changeType = (type) => {
    if (type !== this.personType) {
      this.personType = type;
      this.fetchData();
    }
  }

}
