import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() wantsPro: boolean = false;

  constructor(public authService: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  toggleCheckbox() {
    this.wantsPro = !this.wantsPro;
  }

  infoToastr() {
    this.toastr.info('We sent confirmation mail.', 'Check your inbox!');
  }

}
