import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  expands = [
    {
      title: 'Dịch vụ',
      children: [
        { title: 'Quy chế hoạt động', href: '' },
        { title: 'Ưu đãi thanh toán', href: '' },
        { title: 'Bảo hành điện thoại', href: '' },
        { title: 'Bảo hành mở rộng', href: '' },
        { title: 'Chính sách bảo hành', href: '' },
      ],
    },
    {
      title: 'Sản phẩm',
      children: [
        { title: 'Smart Phone', href: '' },
        { title: 'Phụ kiện', href: '' },
      ],
    },
    {
      title: 'Liên hệ',
      children: [
        { title: 'Mail: teams@techcell.cloud', href: '' },
        { title: 'Hotline: 0019 8942', href: '' },
      ],
    },
  ];
}
