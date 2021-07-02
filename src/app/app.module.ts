import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAnimalComponent,
    AnimalDetailsComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
