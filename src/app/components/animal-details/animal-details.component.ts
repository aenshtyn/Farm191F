import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal.model';


@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})


export class AnimalDetailsComponent implements OnInit {

  currentAnimal: Animal = {
    name: '',
    age: '',
    breed: '',
    owner: ''
  };

  message = '';
  
  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getAnimal(this.route.snapshot.params.id);
  }

  getAnimal(id: string): void {
    this.animalService.get(id)
    .subscribe(
      data => {
        this.currentAnimal = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateAnimal(): void {
    this.animalService.update(this.currentAnimal.id, this.currentAnimal)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAnimal(): void {
    this.animalService.delete(this.currentAnimal.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/animals']);
      },
      error => {
        console.log(error);
      }
    );
  }


}
