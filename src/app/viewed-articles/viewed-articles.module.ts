import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewedArticlesPageRoutingModule } from './viewed-articles-routing.module';

import { ViewedArticlesComponent } from './viewed-articles.component';
import { NewsCardComponentModule } from '../components/news-card/news-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewedArticlesPageRoutingModule,
    NewsCardComponentModule, // Přidejte NewsCardComponentModule do pole imports
  ],
  declarations: [ViewedArticlesComponent],
})
export class ViewedArticlesPageModule {}
