import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../../components/popover/popover.component'
@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.page.html',
  styleUrls: ['./user-news.page.scss'],
})
export class UserNewsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async popover(myEvent:any){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: myEvent,
      translucent: true
    });
    return await popover.present();

  }
}
