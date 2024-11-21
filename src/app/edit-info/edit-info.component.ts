import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css'
})
export class EditInfoComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  
  BoardingForm = new FormGroup({
    aceid: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    route: new FormControl(''),
    pickup: new FormControl(''),
    drop: new FormControl(''),
  
  });
 

  onSubmit(){
    console.log('asd');
  }

  ngOnInit(): void {

    var id = this.route.snapshot.paramMap.get('id');
    
   
  }

}
