import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: '**', component: PageNotFoundComponent, data: { title: '404' } },
];
