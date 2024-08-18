import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  showPassword = signal(false);
  showPasswordConfirm = signal(false);

  toggleShowPasswordConfirm(){
    this.showPasswordConfirm.update(preState=>!preState);
  }


  toggleShowPassword(){
    this.showPassword.update(preState=>!preState);
  }

}
