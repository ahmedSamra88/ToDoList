import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title:string="To Do List App";
  imgSrc:string = "../../assets/home.jpg";
  toDoList:ToDo[]=[];
  toDo:ToDo={} as ToDo;
  constructor(private toDoService:ToDoService){}
  ngOnInit(): void {
    this.GetAll();
  }
  GetAll(){
    this.toDoService.GetAll().subscribe(toDo=>{
      this.toDoList=toDo.reverse()
    });
  }
  CreateTask():void{
    const task={id:this.toDo.id,title:this.toDo.title,completed:false};
    this.toDoService.CreateTodo(task).subscribe(task=>{
      this.toDoList.push(task);
    })
  }
  DeleteTask(id:number){
    this.toDoService.DeleteTodo(id).subscribe(()=>{
      this.toDoList=this.toDoList.filter(todo=>todo.id!==id);
    })
  }
}
