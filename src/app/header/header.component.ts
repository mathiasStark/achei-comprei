import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Saúde & Alimentação', icon: 'pi pi-fw pi-heart'},
    {label: 'Beleza', icon: 'pi pi-fw pi-sun'},
    {label: 'Eletrônicos', icon: 'pi pi-fw pi-calculator'},
  ];

  constructor() {}

  ngOnInit() {}

}
