import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectedItemsComponent } from './components/selected-items/selected-items.component';
import { CardComponent } from './components/card/card.component';
import { CardGroupedComponent } from './components/card-grouped/card-grouped.component';
import { CardVictoryComponent } from './components/card-victory/card-victory.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    ButtonComponent,
    SelectedItemsComponent,
    CardComponent,
    CardGroupedComponent,
    CardVictoryComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
