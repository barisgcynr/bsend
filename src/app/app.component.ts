import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bsend_angular';
  constructor(private router: Router) {}

  ngOnInit() {
    let user = localStorage.getItem('user');
    user = user ? JSON.parse(user) : null;
    console.log(user);

    // if (user  && user.stsTokenManager.expirationTime < Date.now()) {
      
    // }
    // if (user) {
    //   // Kullanıcının UID'si localstorage'da mevcut ise daha önce giriş yapmış demektir
    //   // Burada farklı bir homepage'e yönlendirme işlemini gerçekleştirebilirsiniz
    //   this.router.navigate(['farkli_homepage']);
    // } else {
    //   // Kullanıcının UID'si localstorage'da mevcut değil ise daha önce giriş yapmamış demektir
    //   // Burada normal homepage'e yönlendirme işlemini gerçekleştirebilirsiniz
    //   this.router.navigate(['normal_homepage']);
    // }
  }
}
