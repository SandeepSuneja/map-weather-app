import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
	{path: 'weather', component: WeatherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
	MapComponent,
	WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(
      routes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
