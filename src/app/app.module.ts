import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-container/home/home.component';
import { SideLeftComponent } from './side-left/side-left.component';
import { SideRightComponent } from './side-right/side-right.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about-container/about/about.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactComponent } from './contact-container/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeContainerComponent,
    HomeComponent,
    SideLeftComponent,
    SideRightComponent,
    FooterComponent,
    AboutComponent,
    AboutContainerComponent,
    ContactContainerComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
