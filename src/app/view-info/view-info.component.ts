import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-info',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-info.component.html',
  styleUrl: './view-info.component.css'
})
export class ViewInfoComponent {



  BoardingListNames: any[] = [];
  AllInforamtions: ApiserviceService = inject(ApiserviceService); 
 
     constructor(private router: Router) {
       this.AllInforamtions.getAllInformation().then((AllBoardingList) => {      
       this.BoardingListNames = AllBoardingList;      
         
       });
     }
 

  AddEmployee() {
    this.router.navigate(['AddInfo']);
  }
}
