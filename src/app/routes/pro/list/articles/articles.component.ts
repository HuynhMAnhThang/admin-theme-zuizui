import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-list-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProListArticlesComponent implements OnInit {
  // endregion

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}
  q = {
    ps: 5,
    categories: [],
    Owners: ['zxx'],
    user: '',
    rate: '',
  };

  list: any[] = [];
  loading = false;

  // region: cateogry
  categories = [
       { id: 0, text: 'Loại 1', value: false },
    { id: 1, text: 'Loại 1', value: false },
    { id: 2, text: 'Loại 4', value: false },
    { id: 3, text: 'Loại 5', value: false },
    { id: 4, text: 'Loại 5', value: false },
    { id: 5, text: 'Loại 4', value: false },
    { id: 6, text: 'Loại 4', value: false },
    { id: 7, text: 'Loại 6', value: false },
    { id: 8, text: 'Loại 8', value: false },
    { id: 9, text: 'Loại 9', value: false },
    { id: 10, text: 'Loại 10', value: false },
    { id: 11, text: 'Loại 11', value: false },
    { id: 12, text: 'Loại 12', value: false },
    { id: 0, text: 'Loại 1', value: false },
    { id: 1, text: 'Loại 1', value: false },
    { id: 2, text: 'Loại 4', value: false },
    { id: 3, text: 'Loại 5', value: false },
    { id: 4, text: 'Loại 5', value: false },
    { id: 5, text: 'Loại 4', value: false },
    { id: 6, text: 'Loại 4', value: false },
    { id: 7, text: 'Loại 6', value: false },
    { id: 8, text: 'Loại 8', value: false },
    { id: 9, text: 'Loại 9', value: false },
    { id: 10, text: 'Loại 10', value: false },
    { id: 11, text: 'Loại 11', value: false },
    { id: 12, text: 'Loại 12', value: false },
  ];
  // endregion

  // region: Owners
  Owners = [
    {
      id: 'wzj',
      name: 'Bản thân tôi',
    },
    {
      id: 'wjh',
      name: 'Wu Jiahao',
    },
    {
      id: 'zxx',
      name: 'Zhou Xingxing',
    },
    {
      id: 'zly',
      name: 'Zhao Liying',
    },
    {
      id: 'ym',
      name: 'Yao Ming',
    },
  ];

  changeCategory(status: boolean, idx: number): void {
    if (idx === 0) {
      this.categories.map((i) => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
  }

  setOwner(): void {
    this.q.Owners = [`wzj`];
    // TODO: wait nz-dropdown OnPush mode
    setTimeout(() => this.cdr.detectChanges());
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(more: boolean = false): void {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe((res) => {
      this.list = more ? this.list.concat(res) : res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
