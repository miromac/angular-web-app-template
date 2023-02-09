import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent },
  { path: 'about', component: AboutContainerComponent },
  { path: 'contact', component: ContactContainerComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
