import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { 
    
  }

  userData = [{ username: 'Inba', password: '0011', userToken:  null}, { username: 'ADMIN', password: '12345', userToken: null },]
  
}
