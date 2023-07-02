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
        email: 'your-sender-email-here'
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
      'api-key': 'your-sendinblue-api-key-here'
    };

    return this.http.post(this.apiUrl, mailData, { headers });
  }

}
