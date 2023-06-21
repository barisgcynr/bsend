import { Component, OnInit, Input } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service';
import { FileUpload } from '../../../file-upload';
import { MailService } from 'src/mail.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: FileUpload;

  to: string = '';
  subject: string = '';

  constructor(private uploadService: FileUploadService, private mailSrvc: MailService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
  copyClickBoard(text: string) {
    navigator.clipboard.writeText(text)
  }

  sendEmail() {
    this.mailSrvc.sendMail(this.to, this.subject, this.fileUpload.url)
      .subscribe(
        (response: any) => {
          console.log('E-posta gönderildi');
        },
        (error: any) => {
          console.error('E-posta gönderilemedi', error);
        }
      );
    this.to = '';
    this.subject = '';
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}