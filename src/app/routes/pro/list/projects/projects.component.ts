import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProListProjectsComponent implements OnInit {
  q = {
    ps: 8,
    categories: [],
    Owners: ['zxx'],
    user: null,
    rate: null,
  };
  list: any[] = [];
  loading = true;

  // region: cateogry
  categories = [
       { id: 0, text: 'Loại 1', value: false },
    { id: 1, text: 'Loại 1', value: false },
    { id: 2, text: 'Loại 4', value: false },
    { id: 3, text: 'Loại 5', value: false },
    { id: 4, text: 'Loại tôi nhớ em vãi lúa5', value: false },
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

  changeCategory(status: boolean, idx: number): void {
    if (idx === 0) {
      this.categories.map((i) => (i.value = status));
    } else {
      this.categories[idx].value = status;
    }
    this.getData();
  }
  // endregion

  constructor(private http: _HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.http.get('/api/list', { count: this.q.ps }).subscribe((res) => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
