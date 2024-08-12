import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'list',component:ListComponent,title:'List'},
    {path:'details/:id',component:DetailsComponent,title:'Details'},
    {path:'contact',component:ContactUsComponent,title:'Contact Us'},
    {path:'**',component:NotfoundComponent,title:'not found'},
];
