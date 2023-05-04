import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  //homepage
  //site.com/homepage
  { path: 'homepage', component: HomepageComponent },
  //liste des livres
  //site.com/books
  { path: 'books', component: IndexComponent },
  //détail d'un livre
  //site.com/books/id du livre

  //création d'un livre
  //site.com/create

  //modification d'un livre
  //site.com/books/42/edit

  //suppression d'un livre
  //site.com/books/42/delete

  //default route
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  //wildcard route (404 not fount)
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
