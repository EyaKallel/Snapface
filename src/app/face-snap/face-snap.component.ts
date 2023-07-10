import { Component,OnInit,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!:string
  creationDate!:Date
  snaps!:number;
  imageUrl!:string;
  buttontext!:string;
  date!:Date;
  location!:string;
ngOnInit(): void {
  this.date=new Date();
  //this.faceSnap=new FaceSnap('Archibald','Mon meileur amis depuis tout petit !','https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',this.date,6,'paris');
 
  this.buttontext='Ohsnaps!';
}
onAddsnap(){
  if(this.buttontext =='Ohsnaps!'){
      this.faceSnap.snaps++;
      this.buttontext='oops,unsnaps!';
  }
  else if(this.buttontext=='oops,unsnaps!'){
    this.faceSnap.snaps--;
    this.buttontext ='Ohsnaps!';
  }
}}
