import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthenticationService) {
    
   }
   public user: any;
   public email: string | any;
   isSubscribed: boolean = false;
   
  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.email = this.user.email;
    }

      // Check if user is subscribed
    this.authService.checkSubscription().subscribe((result) => {
      this.isSubscribed = result.subscribed;
    });
  }
  signOut(): void {
    this.authService.SignOut();
  }
}
