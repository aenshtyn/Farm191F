import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'Full'  },
  { path: 'animals', component: AnimalListComponent },
  { path: 'animals/:id', component:AnimalDetailsComponent},
  { path: 'add',component:AddAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
