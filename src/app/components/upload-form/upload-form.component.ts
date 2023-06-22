import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service';
import { FileUpload } from '../../../file-upload';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnInit {
  files: File[] = [];
  currentFileUpload?: FileUpload;
  percentage = 0;
  maxFileSize: number = 2 * 1024 * 1024 * 1024; // 2 GB (in bytes)
  isSubscribed: boolean = false;


  constructor(private uploadService: FileUploadService, private toastr: ToastrService, public authService: AuthenticationService) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.authService.checkSubscription().subscribe((result) => {
        this.isSubscribed = result.subscribed;
      });
    }
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(): void {
    if (Array.isArray(this.files) && this.files.length > 0) {
      this.files.forEach((file: File) => {
        this.currentFileUpload = new FileUpload(file);
        if(this.isSubscribed == false && this.currentFileUpload.file.size > this.maxFileSize){
          this.files = [];
          this.currentFileUpload = undefined
          this.toastr.warning('File size is too big! For upload big files buy Pro subscription.', 'File Upload', {
            timeOut: 7000,
          });
          return;
        }
        else{
          this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
            (percentage) => {
              this.percentage = Math.round(percentage ? percentage : 0);
              if (this.percentage == 100) {
                this.toastr.success('Succesfully uploaded!', 'File Upload');
              }
            },
            (error) => {
              console.log(error);
              this.toastr.error('Opps, something went wrong', 'File Couldn\'t Upload');
            }
          );
        }
        
      });
      this.files = [];
    }
  }
}
