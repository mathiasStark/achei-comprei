import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Top Suplementos', icon: 'pi pi-fw pi-sort'},
    {label: 'Top Exercicios', icon: 'pi pi-fw pi-sort'},
  ];

  constructor() {}

  ngOnInit() {}

}
