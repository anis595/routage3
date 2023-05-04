import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  //homepage
  //site.com/homepage

  { path: 'homepage', component: HomepageComponent },
  //liste des livres
  //site.com/books

  { path: 'books', component: IndexComponent },
  //création d'un livre
  //site.com/create

  { path: 'books/create', component: CreateComponent },

  //détail d'un livre
  //site.com/books/id du livre

  { path: 'books/:id', component: DetailComponent },
  //modification d'un livre
  //site.com/books/42/edit

  { path: 'books/:id/edit', component: UpdateComponent },
  //suppression d'un livre
  //site.com/books/42/delete
  { path: 'books/:id/delete', component: DeleteComponent },
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
