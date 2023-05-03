import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewedArticlesComponent } from './viewed-articles.component';

const routes: Routes = [
  {
    path: '',
    component: ViewedArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewedArticlesPageRoutingModule {}
