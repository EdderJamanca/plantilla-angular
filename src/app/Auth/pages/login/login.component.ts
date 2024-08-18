import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  showPassword = signal(false);

  toogleShowPassword(){
    this.showPassword.update(preState=>!preState);
  }

}
