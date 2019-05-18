import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public indexes:any[]=[
    {subtitle:"News",title:"What Burari Thinks ?",desc:"Get awared about the your surround.get the latest update and news of whatever happening in your localilty.Be an aware localites"},
    {subtitle:"Post your ads ! Get your business known to localites ! ",title: "Get Resistered as Merchant account ",desc:"Open a merchant account ! Post your ads and get your business more reachable amongs localites"},
    {subtitle:"Are you a Social Freak ?", title:"Desperate to know about people of your locality !",desc:"Get registered with localites platform and make more frineds from your area itself.Share and upload your photos, videos, status, stories and activities with the people of your localites and let them know the people live in their surroundings. "},
    {subtitle:"Explore Burari",title:"Know every things about burari",desc:"Are you really looking for a good school near by your house.just explore the school and know everything about some toprated school in burari.Read reviews Check ratings and many more."}]

  constructor(public alertController: AlertController,private router: Router) { }

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
            handler: (data) => {
              localStorage.setItem('name', data.Name)
              this.router.navigateByUrl("/dashboard")
            }
          }
        ]
      });
  
      await alert.present();
    }



    async loginPrompt() {
      const alert = await this.alertController.create({
        header: 'Login',
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
            text: 'Login',
            handler: (data) => {
              console.log(data.Email);
              localStorage.setItem('name', data.Name)
              this.router.navigateByUrl("/dashboard")
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


