import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  userData = [{ username: 'Inba', password: '0011' }, { username: 'ADMIN', password: '12345' },]
  
}
