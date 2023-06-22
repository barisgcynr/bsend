import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  selectedFiles?: FileList;
  percentage = 0;
  public user: any;
  public uid: string | any;
  isSubscribed: boolean = false;

  constructor(public authService: AuthenticationService) {}
  ngOnInit(): void {
    // Get user data if loggedIn
    if (this.authService.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.uid = this.user.uid;
    }

    // Check if user is subscribed
    this.authService.checkSubscription().subscribe((result) => {
      this.isSubscribed = result.subscribed;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
}
