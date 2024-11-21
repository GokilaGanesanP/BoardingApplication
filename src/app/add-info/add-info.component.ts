import { Component,inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';




@Component({
  selector: 'app-add-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    HttpClientModule, HttpClient
  ],
  templateUrl: './add-info.component.html',
  styleUrl: './add-info.component.css'
})
export class AddInfoComponent {

  

  constructor(private apiService: ApiserviceService, private http: HttpClient) {}


    // Initialize the form group and controls
    BoardingForm = new FormGroup({
      aceid: new FormControl(''),
      fname: new FormControl(''),
      lname: new FormControl(''),
      route: new FormControl(''),
      pickup: new FormControl(''),
      drop: new FormControl(''),
    
    });

    onSubmit() {

    
      this.apiService.submitFormData(this.BoardingForm.value).subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    }

   
  // private apiUrl = 'http://127.0.0.1:8000/api/boarding'; 
   
  //   onSubmit() : Observable<any>{
  //     const formData = this.BoardingForm.value;

  //     console.log(formData);
  //     this.http.post(this.apiUrl, formData).subscribe(
  //       response => {
  //         console.log('Success:', response);
  //       },
  //       error => {
  //         console.error('Error:', error);
  //       }
  //     );
  //     console.log("asdsd");

  //   return   this.http.post(this.apiUrl, formData);
      
     
      
  //   }

}
