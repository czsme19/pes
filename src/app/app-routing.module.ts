import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {ViewedArticlesComponent} from "./src/app/viewed-articles/viewed-articles.component.ts";
import {ViewedArticlesComponent} from '../app/viewed-articles/viewed-articles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  // Přidejte nové směrování pro stránku ViewedArticlesComponent
  {
    path: 'viewed-articles',
    component: ViewedArticlesComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
