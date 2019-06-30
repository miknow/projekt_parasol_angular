import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core';
import { ComputersComponent } from './computers/computers.component';
import { EnglishComponent } from './english/english.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    BlogComponent,
    HomeComponent,
    ComputersComponent,
    EnglishComponent,

  ],
  imports: [
    BrowserModule, NgbModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLVhAHE0JZ3-ROtc5ZazQUKDeriEWrlTs'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
