import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public indexes:any[]=[1,2,3,4,5]

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  
    async registrationPrompt() {
      const alert = await this.alertController.create({
        header: 'Registration',
        inputs: [
          {
            name: 'Name',
            type: 'text',
            placeholder: 'Enter name'
          },
          {
            name: 'Email',
            type: 'text',
          
            placeholder: 'Enter user email'
          },{
            name: 'Password',
            type: 'password',
          
            placeholder: 'Enter password'
          }
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Sign Up',
            handler: () => {
              console.log('');
            }
          }
        ]
      });
  
      await alert.present();
    }



    async loginPrompt() {
      const alert = await this.alertController.create({
        header: 'Registration',
        inputs: [
          
          {
            name: 'Email',
            type: 'text',
          
            placeholder: 'Enter user email'
          },{
            name: 'Password',
            type: 'password',
          
            placeholder: 'Enter password'
          }
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Login',
            handler: () => {
              console.log('');
            }
          }
        ]
      });
  
      await alert.present();
    }

    registration(){
      this.registrationPrompt();
    }
   login(){
     this.loginPrompt();
   }


  }


