import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  title:string="To Do List App";
  imgSrc:string = "../../assets/home.jpg";
  tasks:string[]=[];
  task:string="";
  edit:boolean=false;
  newTask:string="";
  constructor(){
    this.tasks=["goto school","goto course","playin and swimming"];
  }
  AddNewTask(task:string){
    this.task=task.trim();
    if(this.task!="")     
        this.tasks.push(task);
    this.task="";
  }
  EditTask(){
    this.edit=true;
  }
 UpdateTask(id:number,task:string){
  this.tasks[id]=task;
  this.edit=false;
 }
  DeleteTask(id:number){
    this.tasks.splice(id,1);
  }
}
