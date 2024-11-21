import { Routes } from '@angular/router';
import { ViewInfoComponent } from './view-info/view-info.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

export const routes: Routes = [
    {path : '', component : ViewInfoComponent},
    {path : 'AddInfo', component : AddInfoComponent},
    {path : 'EditInfo/:id', component : EditInfoComponent}


];


