import { Component, OnInit } from '@angular/core';
import { RootPath } from '@utils/list.utils';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  protected readonly RootPath = RootPath;

  ngOnInit() {
    this.title.setTitle('Techcell - Đăng ký')
  }

  constructor(private title: Title) {
  }
}
