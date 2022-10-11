import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=() =>{
    this.myapi.photoviewData().subscribe(
      (data)=>{
        this.photosData=data
      }
    )
  }

  photosData:any = [ ]
    
  

  ngOnInit(): void {
  }

}
