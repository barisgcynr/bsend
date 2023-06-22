import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = 'https://api.sendinblue.com/v3/smtp/email';
  constructor(private http: HttpClient) {
    
   }

   sendMail(to: string, subject: string, message: string) {
    const mailData = {
      sender: {
        name: 'BSend',
        email: 'noreplybsend@gmail.com'
      },
      to: [
        {
          email: to
        }
      ],
      subject: subject,
      htmlContent: message
    };

    const headers = {
      'Content-Type': 'application/json',
      'api-key': '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'
    };

    return this.http.post(this.apiUrl, mailData, { headers });
  }

}
