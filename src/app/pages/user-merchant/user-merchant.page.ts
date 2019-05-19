import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../../components/popover/popover.component'
@Component({
  selector: 'app-user-merchant',
  templateUrl: './user-merchant.page.html',
  styleUrls: ['./user-merchant.page.scss'],
})
export class UserMerchantPage implements OnInit {

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
