import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from '../../services/account.service';

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
  accountType = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams['success']) {
      this.success = true;
    }
    this.fetchData();
  }

  fetchData = () => {
    const params = {
      by_kind: this.accountType
    };
    this.loading = true;
    this.accountService.index(params)
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
    if (type !== this.accountType) {
      this.accountType = type;
      this.fetchData();
    }
  }

  deleteConfirmation = (itemId: number, itemName: string) => {
    if (confirm(`Você tem certeza que deseja excluir ${itemName}?`)) {
      this.loading = true;
      this.accountService.remove(itemId)
        .subscribe(
          (response) => {
            alert('Item excluído com sucesso.');
            this.loading = false;
            this.fetchData();
          },
          (response) => {
            this.loading = false;
            alert('Erro ao executar a ação, favor tente novamente mais tarde.');
          }
        );
    }
  }

  getStatus = (status) => {
    switch (status) {
      case 'activated':
        return 'ativo';
      case 'blocked':
        return 'bloqueado';
      case 'canceled':
        return 'cancelado';
    }
  }

}
