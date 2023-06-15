import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/base.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  selectedFiles?: FileList;
  percentage = 0;

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

}
