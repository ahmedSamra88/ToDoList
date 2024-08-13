import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  title:string="To Do List App";
  imgSrc:string = "../../assets/home.jpg";
  task:ToDo|undefined;
  completed:string="un Completed";
  constructor(private router:Router,private route:ActivatedRoute,private service:ToDoService){}
  ngOnInit(): void {
    this.GetTask();
  }
  GetTask(){

    const id=this.route.snapshot.paramMap.get('id');
    if(id)
    this.service.GetDetails(id).subscribe(task=>{
      this.task=task;
      this.completed=this.task?.completed?"completetd" : "un completed";

    });

  }
  Update(){
    if(this.task)
      
    this.service.UpdateDetails(this.task).subscribe(()=>{
      this.router.navigate(['home']);
    })
  }
}
