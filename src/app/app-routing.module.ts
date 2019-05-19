import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  
  { path: 'index', loadChildren: './pages/index/index.module#IndexPageModule' },
  
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'user-news', loadChildren: './pages/user-news/user-news.module#UserNewsPageModule' },
  { path: 'user-explore', loadChildren: './pages/user-explore/user-explore.module#UserExplorePageModule' },
  { path: 'user-merchant', loadChildren: './pages/user-merchant/user-merchant.module#UserMerchantPageModule' },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
