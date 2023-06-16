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
  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.email = this.user.email;
      }
  }
  signOut(): void {
    this.authService.SignOut();
  }
}
