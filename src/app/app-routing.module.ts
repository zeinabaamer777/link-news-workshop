import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./pages/news-list/news-list.module').then(m => m.NewsListModule) },
  { path: 'news-details', loadChildren: () => import('./pages/news-details/news-details.module').then(m => m.NewsDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
