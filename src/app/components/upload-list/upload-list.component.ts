import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads?: any[];

  constructor(private uploadService: FileUploadService, private auth: AuthenticationService) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.auth.isLoggedIn){
      this.uploadService.getFiles(100).snapshotChanges().pipe(
        map(changes =>
          // store the key
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
    }
    
  }
  
}