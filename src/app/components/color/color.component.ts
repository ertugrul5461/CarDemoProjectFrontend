import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ColorService } from 'src/app/services/color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];

  currentColor:Color;

  selectedColor:number;
  
  currentColorId:number=1;

  exampleColor:number=0;
  


  

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  show(colorId:number){
    this.currentColorId=colorId;
    this.exampleColor=colorId;
    console.log(this.exampleColor);
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
    this.currentColorId=color.id;
  }

  deleteCurrentColor(){
    if(this.currentColor){
      this.currentColor={id:0,colorName:""};
    }
  }

  getCurrentClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllColorClass(){
    if(!this.currentColor || this.currentColor.id==0){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
