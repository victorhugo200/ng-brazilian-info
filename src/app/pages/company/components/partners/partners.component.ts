import { Component, Input, OnInit } from '@angular/core';
import { Qsa } from 'src/app/shared/models/company.model';
import { paginate, paginateHasItems } from 'src/app/shared/utils/paginate';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  @Input() partners: Qsa[] = [];
  public allPartners: Qsa[] = [];
  public page = 1;
  public showButtonLoadMore = true;
  public showTemplateLoadMore = false;
  public pageSize = 6;
  constructor() {}

  ngOnInit(): void {
    this.allPartners = this.partners;
    this.partners = paginate(this.page, this.allPartners, this.pageSize);
  }

  async loadMore(){
    this.page++;
    this.showButtonLoadMore = false;
    this.showTemplateLoadMore = true;
    await setTimeout(() => {
      this.partners = [...this.partners, ...paginate(this.page, this.allPartners, this.pageSize)];
      this.showButtonLoadMore = paginateHasItems(this.page, this.allPartners);
      this.showTemplateLoadMore = false;
    }, 2000);
  }
}
