import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'     
      },
      { path: 'news', loadChildren: '../news/news.module#NewsPageModule' },
      {
        path:'',
        redirectTo:'/dashboard/profile',
        pathMatch: 'full'
  
      },
    ]
        
    
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
