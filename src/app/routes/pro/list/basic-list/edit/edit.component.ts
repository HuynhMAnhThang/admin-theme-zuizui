import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-basic-list-edit',
  templateUrl: './edit.component.html',
})
export class ProBasicListEditComponent {
  record: any = {};
  schema: SFSchema = {
    properties: {
      title: { type: 'string', title: 'Tên nhiệm vụ', maxLength: 50 },
      createdAt: { type: 'string', title: 'Thời gian bắt đầu', format: 'date' },
      Owner: {
        type: 'string',
        title: 'Trưởng nhóm',
        enum: [
          { value: 'A', label: 'HÀ' },
          { value: 'B', label: 'BẢo' },
          { value: 'CC', label: 'Chính chiệu' },
        ],
      },
      subDescription: {
        type: 'string',
        title: 'Mô tả sản phẩm',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
    },
    required: ['title', 'createdAt', 'Owner'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService) {}

  save(value: any): void {
    this.msgSrv.success('Luu');
    this.modal.close(value);
  }

  close(): void {
    this.modal.destroy();
  }
}
