import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public appPages = [
    {
      title: 'Profile',
      url: 'profile',
      icon: 'home'
    },
    {
      title: 'News',
      url: 'news',
      icon: 'list'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
