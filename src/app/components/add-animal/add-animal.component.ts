import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})

export class AddAnimalComponent implements OnInit {

  animal: Animal = {
    name: '',
    // dob: '',
    age: '',
    // purchase_date: '',
    breed: '',
    owner: ''
  };

  submitted = false;

  constructor(private animalService: AnimalService) { }
  

  ngOnInit(): void {
  }

  saveAnimal(): void {
    const data = {
      name: this.animal.name,
      age: this.animal.age,
      breed: this.animal.breed,
      owner:this.animal.owner
    };

    this.animalService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    }

    newAnimal(): void {
      this.submitted = false;
      this.animal = {
        name: '',
        age: '',
        breed: '',
        owner:''
      };
    }
}





