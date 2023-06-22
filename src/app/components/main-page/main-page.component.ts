import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  selectedFiles?: FileList;
  percentage = 0;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

}
