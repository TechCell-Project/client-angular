import { Component, OnInit } from '@angular/core';
import { cilArrowRight } from '@coreui/icons';
import { faRocket, faArrowsRotate, faPhone, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

interface ISlider {
  src: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    this.title.setTitle('Techcell - Trang chủ')
  }

  slides: ISlider[] = [
    { src: './assets/banner_2.jpg', title: 'techcell_banner_2' },
    { src: './assets/banner_1.jpg', title: 'techcell_banner_1' },
    { src: './assets/banner_3.jpg', title: 'techcell_banner_3' },
  ];

  icons = { cilArrowRight };

  benefits = [
    { icon: faRocket, title: 'Vận chuyển nhanh', desc: 'Miễn phí vận chuyển cho đơn hàng từ 2tr' },
    { icon: faArrowsRotate, title: 'Đổi trả & hoàn tiền', desc: 'Quy trình đổi trả dễ dàng' },
    { icon: faPhone, title: 'Liên hệ', desc: 'Chăm sóc khách hàng 24/7' },
    { icon: faCreditCard, title: 'Thanh toán', desc: 'VNPay & COD trả tiền khi nhận hàng' },
  ];

  constructor(private title: Title) {
  }
}
