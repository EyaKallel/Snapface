import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Snap-face';
  mySnap !: FaceSnap ;
  myothersnap !: FaceSnap;
  mylastsnap !: FaceSnap;
  ngOnInit(): void {
    
   this.mySnap= new FaceSnap(
    'Archibald',
   'Mon meileur amis depuis tout petit !',
   'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',new Date (),1500,'Paris');
  
  this.myothersnap = new FaceSnap(
     'Three Rock Mountain',
     'Un endroit magnifique pour les randonnées.',
     'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
     new Date(), 1000,'La montagne');

  this.mylastsnap = new FaceSnap(
    'Un bon repas',
    'Mmmh que c\'est bon !',
    'https://www.restaurant-l-olivier.com/wp-content/uploads/2022/08/brunch_t20_o1y3j3-930x620.jpg',
    new Date(),2000);
  };
 
};

  


  
