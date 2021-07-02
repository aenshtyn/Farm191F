import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals?: Animal[];
  currentAnimal?: Animal;
  currentIndex = -1;
  name = '';
  
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.retrieveAnimals();
  }

  retrieveAnimals(): void {
    this.animalService.getAll()
    .subscribe(
      data => {
        this.animals = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveAnimals();
    this.currentAnimal = undefined;
    this.currentIndex = -1;
  }

  setActiveAnimal(animal: Animal, index: number): void {
    this.currentAnimal = animal;
    this.currentIndex = index;
  }
    
  searchName(): void {
    this.animalService.findByName(this.name)
    .subscribe(
      data => {
        this.animals = data;
        console.log(data)
      },
      error => {
        console.log(error);
      });
  }

}
