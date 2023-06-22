import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bsend_angular';
  isSubscribed: boolean = false;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.checkSubscription().subscribe(result => {
      this.isSubscribed = result.subscribed;

      if (result.subscribed) {
        // Abonelik süresi geçmişse aboneliği kaldır
        this.checkAndRemoveSubscription(result.uid);
      }
    });
  }

  checkAndRemoveSubscription(uid: string) {
    const currentDate = new Date();

    this.authService.getSubscription(uid).subscribe(subscription => {
      if (subscription) {
        const expirationDate = new Date(subscription.expirationDate);

        if (expirationDate < currentDate) {
          // Abonelik süresi geçmiş, aboneliği kaldır
          this.authService.removeSubscription(uid).then(() => {
            console.log('Subscription expired.');
          }).catch(error => {
            console.error(error);
          });
        }
      }
    });
  }
}
