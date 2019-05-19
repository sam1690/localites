import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
public name:String;
  constructor(private router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
    this.name=`Hi ${localStorage.getItem('name')}`
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("/index")
    this.popoverController.dismiss();

    
  }

}
