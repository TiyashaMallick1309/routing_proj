import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
blogs=[
  {
    id: 1,
    title:"Israel War",
    category: 'foreign'
  },
  {
    id: 2,
    title:"Political Update",
    category: 'political'
  },
  {
    id: 3,
    title:"Luxury Update",
    category: 'luxury'
  },
  {
    id: 4,
    title:"Poetry Update",
    category: 'poetry'
  },
  {
    id: 5,
    title:"People Update",
    category: 'people'
  },
  {
    id: 6,
    title:"Filmy News",
    category: 'filmy'
  }
];
  constructor() { }
}
