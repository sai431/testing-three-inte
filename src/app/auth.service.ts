// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private allowedService: string = '';

  login() {
    // Implement your login logic here
    this.isAuthenticated = true;
  }

  logout() {
    // Implement your logout logic here
    this.isAuthenticated = false;
    this.allowedService = '';
  }

  

  setAllowedService(service: string) {
    this.allowedService = service;
  }

  getAllowedService(): string {
    return this.allowedService;
  }
}
