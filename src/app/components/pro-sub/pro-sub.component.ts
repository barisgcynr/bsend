import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-pro-sub',
  templateUrl: './pro-sub.component.html',
  styleUrls: ['./pro-sub.component.scss']
})
export class ProSubComponent implements OnInit {

  public user: any;
  public uid: string | any;
  isSubscribed: boolean = false;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    // Get user data if loggedIn
    if (this.authService.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.uid = this.user.uid;
    }
  }

  handleSubscription() {
    this.authService.addSubscription();
  }

}
