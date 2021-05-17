import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showSideMenu: boolean = false;
  public showSearchInput: boolean = false;
  showNotifications: boolean = false;
  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu
    this.status = !this.status;
  }
  openSearch() {
    this.showSearchInput = !this.showSearchInput
  }

}
