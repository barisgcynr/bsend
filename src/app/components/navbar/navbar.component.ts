import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserSignedIn: boolean;
  constructor(private authService: AuthenticationService) {
    this.isUserSignedIn = authService.isUserSignedIn();
    console.log(this.isUserSignedIn);
    
   }

  ngOnInit(): void {
  }

}
