import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../authentication.service";
import { FileUploadService } from 'src/file-upload.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    public authService: AuthenticationService
  ) { }
  ngOnInit() { }
}