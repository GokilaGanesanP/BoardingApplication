import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://127.0.0.1:8000/api/boarding'; 

  async getAllInformation() {
    const data = await fetch(this.apiUrl);
    return await data.json() ?? [];
  }

  // Method to submit form data to the API
  submitFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  
}

