import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Animal } from '../models/animal.model';

const baseUrl = 'http://localhost:8000/api/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(baseUrl);
  }

  get(id: any): Observable<Animal> {
    return this.http.get('${baseUrl}/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${baseUrl}/${id}',data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${baseUrl}/${id}');
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Animal[]>{
    return this.http.get<Animal[]>('${baseUrl}?name=${name}');
  }
}
