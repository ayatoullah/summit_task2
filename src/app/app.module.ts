import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/Common/Http';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientdataComponent } from './clientdata/clientdata.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientdataComponent,
    RestaurantsComponent,
   
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
